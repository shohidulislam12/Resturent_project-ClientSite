import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAxiouSecure from "../../../Hooks/useAxiouSecure";
import Swal from "sweetalert2";


const Cart = () => {
    const [cart,refetch]=useCart()
const axiousSecure=useAxiouSecure()
    const total=cart.reduce((total,item)=>total+item.price,0)
console.log('cart')


const handleDelete=  id=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
 console.log(id)
     axiousSecure.delete(`/cards/${id}`)
     .then(res=>{
         Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
 refetch()
     } )
    

  
        }
      });
   
}

    return (
        <div className="">
            <div className="flex p-5  border justify-between ">
                <h2 className="text-3xl font-semibold">Total Order :{cart.length}</h2>
                <h2 className="text-3xl font-semibold">Total Price:{total}  0$ </h2>
                <button className="text-3xl btn btn-primary bg-orange-400 text-black font-semibold">Pay</button>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        serial
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        cart.map((item,i)=>
            <tr key={item._id}>
            <th>
              {i+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.itemname}</div>
                 
                </div>
              </div>
            </td>
            <td>
              {item.username}
              <br />
              <span className="badge badge-ghost badge-sm">{item.useremail}</span>
            </td>
            <td>{item.price}$</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-500"> <FaTrashAlt/></button>
            </th>
          </tr>
        )
      }
    
    </tbody>
    {/* foot */}
  
  </table>
</div>
            </div>

        </div>
    );
};

export default Cart;