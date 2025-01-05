import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiousPublic from "../../Hooks/useAxiousPublic";


const SocialLogin = () => {
    const axiousPublic=useAxiousPublic()
    const naviagete=useNavigate()
    const {googleLogin}=useContext(AuthContext)
    const handlegoogleSignIn=()=>{
    googleLogin()
      .then((result) => {
        console.log(result);
        const userinf={name:result.user?.displayName,email:result.user?.email}
        console.log(userinf)
        axiousPublic.post("/users",  userinf )
        .then((res) => {
        
          if (res.data) {
            console.log(res.data);
           
          }
         else {return  console.log(data)}
        });
        naviagete("/");
        toast.success("Login Sucess");
      })
      .catch((error) => {
        console.log(err);
        toast.error("Login Faild");
        // save data in db
       

        // end save
      });
    }
    return (
        <div className="p-8">
            <div>
            <div className="divider"></div>
            <button onClick={handlegoogleSignIn} className="btn btn-outline ">
<FaGoogle  className="m-4"></FaGoogle>
  GooGle
</button>
            </div>
        </div>
    );
};

export default SocialLogin;