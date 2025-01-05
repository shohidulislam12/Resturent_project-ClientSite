import { CiCircleList } from "react-icons/ci";
import { FaBook, FaCalendar, FaCartPlus, FaEnvelope, FaHome, FaSearch, FaThList, FaUser, FaUtensils } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/UseAdmin";



const DAshBord = () => {
    const [cart]=useCart()
    
    const { isAdmin, isLoading, error } = useAdmin(); 

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>; failed
    }
  
    console.log(isAdmin); 
  return (
    <div className="flex">
        {/* sidebar  */}
      <div className="w-64 min-h-screen bg-orange-300">
       {
        isAdmin?<>

<ul className="m-4 p-5 flex flex-col flex-grow text-left items-start">
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaHome /><NavLink to="/dashbord/adminhome">Admin Home</NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaUtensils></FaUtensils><NavLink to="/dashbord/additem">  Add Item <span className="absolute bg-white rounded-full text-sm">{cart.length} </span></NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaThList></FaThList><NavLink to="/dashbord/manageitem">ManageItem</NavLink> </li>
       
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaBook /><NavLink to="/dashbord/booking"> Manage Booking</NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaUser /><NavLink to="/dashbord/users"> All Users</NavLink> </li>
       
        </ul>
        </>:<>
        <ul className="m-4 p-5 flex flex-col flex-grow text-left items-start">
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaHome /><NavLink to="/dashbord/userhome">User Home</NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaCartPlus /><NavLink to="/dashbord/cart">My Cart <span className="absolute bg-white rounded-full text-sm">{cart.length} </span></NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaCalendar /><NavLink to="/dashbord/reservation">Reservation</NavLink> </li>
       
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><IoMdText /><NavLink to="/dashbord/review"> Add Review</NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><CiCircleList /><NavLink to="/dashbord/mybookings"> Bookings</NavLink> </li>
       
        </ul>
        </>
       }
        <div className="divider divider-neutral p-5"></div>
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaHome /><NavLink to="/"> Home</NavLink> </li>
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaSearch /><NavLink to="/ourmenu">Menu</NavLink> </li>
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaEnvelope/><NavLink to="/dashbord/contact"> Contact</NavLink> </li>
      </div>
      {/* content */}
      <div className=" m-4 p-5  w-full">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default DAshBord;
