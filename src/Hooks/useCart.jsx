import { useQuery } from "@tanstack/react-query";
import useAxiouSecure from "./useAxiouSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const {user}=useAuth()
    const axiousSecure=useAxiouSecure()
    //tanstac query
    const {refetch,data:cart=[]}=useQuery({

        queryKey:['cart',user?.email],
        queryFn: async ()=>{
           const res=await axiousSecure.get(`/carts?email=${user?.email}`)
            console.log("data",res.data)
            return res.data          
        }
    })

return [cart,refetch]
};

export default useCart;