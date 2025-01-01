import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, replace, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
     if(loading) return <span className="loading loading-bars loading-lg"></span>
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location} } replace></Navigate>
};

export default PrivetRoute;