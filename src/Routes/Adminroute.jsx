import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/UseAdmin";
import useAuth from "../Hooks/useAuth";


const Adminroute = () => {
    const { isAdmin: data, isLoading, error }=useAdmin()
    const location=useLocation()
    const {user,loading}=useAuth()
     if(loading||isLoading) return <span className="loading loading-bars loading-lg"></span>
    if(user&&isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location} } replace></Navigate>
};

export default Adminroute;