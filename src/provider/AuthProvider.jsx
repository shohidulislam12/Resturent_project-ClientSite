import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useAxiousPublic from "../Hooks/useAxiousPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const axiousPublic=useAxiousPublic()
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const creatuserEmailPAss = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutuser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateinf = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser?.email) {
        setUser(currentuser);
        console.log("currentuser", currentuser);
        setLoading(false);
        // set token 
        const userInf={email:currentuser.email}
      axiousPublic.post('/jwt',userInf)
      .then(res=>{
       
        if(res.data.token){
            try {
                localStorage.setItem('access-token', res.data.token);
                console.log("Token successfully set in localStorage.");
            } catch (error) {
                console.error("Error setting token in localStorage:", error);
            }
        }
      })

      }
      else{
     // remove token 
localStorage.removeItem('access-token')


      }

      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, [axiousPublic]);
  const authInf = {
    setUser,
    user,
    loading,
    setLoading,
    creatuserEmailPAss,
    signInEmailAndPass,
    signOutuser,
    googleLogin,
    updateinf,
  };
  return (
    <AuthContext.Provider value={authInf}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
