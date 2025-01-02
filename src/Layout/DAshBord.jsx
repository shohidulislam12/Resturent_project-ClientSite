import { CiCircleList } from "react-icons/ci";
import { FaCalendar, FaCartPlus, FaHome, FaSearch } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DAshBord = () => {
    const [cart]=useCart()
  return (
    <div className="flex">
        {/* sidebar  */}
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="m-4 p-5 flex flex-col flex-grow text-left items-start">
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaHome /><NavLink to="/dashbord/userhome">User Home</NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaCartPlus /><NavLink to="/dashbord/cart">My Cart <span className="absolute bg-white rounded-full text-sm">{cart.length} </span></NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaCalendar /><NavLink to="/dashbord/reservation">Reservation</NavLink> </li>
       
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><IoMdText /><NavLink to="/dashbord/review"> Add Review</NavLink> </li>
          <li className="flex items-center justify-center gap-3 p-3 text-2xl"><CiCircleList /><NavLink to="/dashbord/mybookings"> Bookings</NavLink> </li>
       
        </ul>
        <div className="divider divider-neutral p-5"></div>
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaHome /><NavLink to="/"> Home</NavLink> </li>
        <li className="flex items-center justify-center gap-3 p-3 text-2xl"><FaSearch /><NavLink to="/ourmenu">Menu</NavLink> </li>
      </div>
      {/* content */}
      <div className=" m-4 p-5  w-full">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default DAshBord;
