import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = () => {
  const {user,signOutuser}=useContext(AuthContext)
  const naviagete=useNavigate()

const handleLogOut=()=>{
  signOutuser()
  .then(()=>{
console.log('logOutSuccess')
naviagete('/')
  })
  .catch(err=>console.log(err))
}
    const list=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/ourmenu'>Our Menu</NavLink></li>
    <li><NavLink to='/ourshop/salad'>Our Shop</NavLink></li>
    <li><NavLink to='/'>DASHBOARD</NavLink></li>
    <li><NavLink to='/secret'>Secret</NavLink></li>

{  !user?<>
  <li><NavLink to='/signup'>SIGN UP</NavLink></li>
  <li><NavLink to='/login'>Log In</NavLink></li>
</>: <li>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </li>}
 
    </>
    return (
        <div className="navbar bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {
             list}
            </ul>
          </div>
          <h2>
       <span className="text-xl  font-semibold">   BISTRO BOSS</span> <br />
       <span className="text-sm font-semibold">Restaurant</span>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
          list}
          </ul>
        </div>
        <div className="dropdown dropdown-end">
   { user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full text-black">
        <img
          alt="Tailwind CSS Navbar component"
          src={user.photoURL} />
      </div>
    </div>}

    </div>
  </div>
     
    );
};

export default Navbar;