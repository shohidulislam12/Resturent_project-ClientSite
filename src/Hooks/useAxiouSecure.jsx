import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "./useAuth";

const axiousSecure=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiouSecure = () => {
    const navigate=useNavigate()
    const {signOutuser}=useAuth()
axiousSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('access-token')
  //  console.log(token)
  //  console.log('request stopped by interceptor')
    config.headers.authorization=`bearer ${token}`
    return config
},
function(error){
    return Promise.reject(error)
})
//intercept 401 and 403 status
axiousSecure.interceptors.response.use(
    function(response){
return response 
}
,async(error)=>{
   
    const status=error.response.status
  //  console.log("error in terceptor",error.response.status)
    await signOutuser();
    if(status===401||status===403){
          navigate('/login')
    }
    return Promise.reject(error)
})

// axiousSecure.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       console.error("Error in response interceptor:", error);
//       return Promise.reject(error);
//     }
//   );
  

 return axiousSecure
};

export default useAxiouSecure;

// ,{
//     headers:{
//         authorization:`bearer ${localStorage.getItem('access-token')}`
//     }
// }