import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)

const [loading,setLoading]=useState(true)
const provider = new GoogleAuthProvider();

const creatuserEmailPAss=(email, password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
}
const signInEmailAndPass=(email, password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}
const signOutuser=()=>{
    setLoading(true)
    return signOut(auth)
}
const googleLogin=()=>{
    setLoading(true)
   return signInWithPopup(auth, provider)
}
const updateinf=(name,image)=>{
   return  updateProfile(auth.currentUser, {
        displayName:name, photoURL:image
      })
}

useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth, (currentuser) => {
          if (currentuser) {
           setUser(currentuser)
     
            console.log('currentuser',currentuser)
          setLoading(false)
          }
  
      
         
        });
        setLoading(false)
        return ()=>{
              
            return unsubscribe()
        }
        
  },[])
    const authInf={
        setUser,user,loading,setLoading,creatuserEmailPAss,signInEmailAndPass,signOutuser,googleLogin,updateinf
    }
    return (
        <AuthContext.Provider value={authInf}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;