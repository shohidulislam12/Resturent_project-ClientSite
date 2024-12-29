import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shayerd/Footer";
import Navbar from "../Pages/Home/Shayerd/Navbar";


const Main = () => {
    return (
        <div className="max-w-screen-xl   mx-auto">
<Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;