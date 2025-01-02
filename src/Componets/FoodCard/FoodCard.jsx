import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiouSecure from "../../Hooks/useAxiouSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
  const axiousSecure=useAxiouSecure()
  const location=useLocation()
  const {user}=useAuth()
  const navigate=useNavigate()
  const [,refetch]=useCart()
const handleAddToCard=(item)=>{
  console.log(item,user?.email)
  if(user&&user.email){
    //send card item database
    const cartItem={
      menuId:item._id,
      useremail:user.email,
      username:user?.displayName,
      price:item.price,
      image:item.image,
      itemname:item?.name

    }
    axiousSecure.post('/carts',cartItem)
    .then(res=>{
    //  console.log(res.data)
      if(res.data.acknowledged){
        toast.success(`${item.name }succesffuly ad cart`)
      }
    });
    //refetch update count
    refetch()

    //console.log(cartItem)
  }
  else {
    Swal.fire({
      title: " You are not login",
      text: "please login add to card!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes login !"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login',{state:{from:location}})
      }
    });
  }

}
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={item.image}
            alt="food"
            className="rounded-xl" />
        </figure>
        <p className="bg-black  text-white absolute right-7 top-10 p-1 mr-4 mt-4">${item.price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <p className="text-left">{item.recipe}</p>
          <div className="card-actions">
            <button onClick={()=>handleAddToCard(item)} className="btn btn-outline bg-slate-200 border-0 border-b-2 border-black border-gray-400">Add To Card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;