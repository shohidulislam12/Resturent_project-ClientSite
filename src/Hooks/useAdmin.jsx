import { useQueries, useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiouSecure from "./useAxiouSecure";


const useAdmin = () => {
    const axiousSecure=useAxiouSecure()
    const {user}=useAuth()
const { data, error, isLoading }=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async()=>{
        const res=await axiousSecure.get(`/users/admin/${user.email}`)
        console.log(res.data.admin)
        return res.data?.admin
    }
})
return  { isAdmin: data, isLoading, error }
};

export default useAdmin;