import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiouSecure from "../../../Hooks/useAxiouSecure";


const Paymentshistory = () => {
    const axiousSecure=useAxiouSecure()
    const {user}=useAuth()
    const {data:payment=[]}=useQuery({
        queryKey:['payment'],
        queryFn:async()=>{
          const res=  await axiousSecure.get(`/paymenthistory/${user?.email}`)
        console.log(res.data)
          return res.data
          
        }
    })
    console.log(payment)
    return (
        <div>
            <h2 className="text-3xl">Total Payment {payment.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Transaction Id</th>
        <th>status</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{payment.map((pay,i)=>
          <tr key={pay._id}>
          <th>{i+1}</th>
          <td>{pay.transactionId}</td>
          <td>{pay.status}</td>
          <td>{pay.price}$</td>
        </tr>
)}


    </tbody>
  </table>
</div>
        </div>
        
    );
};

export default Paymentshistory;