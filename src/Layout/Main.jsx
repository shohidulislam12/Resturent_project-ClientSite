import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Home/Shayerd/Footer";
import Navbar from "../Pages/Home/Shayerd/Navbar";
import { Toaster } from "react-hot-toast";


const Main = () => {
    const location=useLocation()
    console.log(location.pathname)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className="max-w-screen-xl   mx-auto">
         {noHeaderFooter||    <Navbar></Navbar>}
            <Outlet></Outlet>
            <Toaster />
          {noHeaderFooter||  <Footer></Footer>}
        </div>
    );
};

export default Main;