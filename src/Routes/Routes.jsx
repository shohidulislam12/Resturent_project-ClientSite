import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/login/Login";
import SignIn from "../Pages/login/SignIn";
import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/Home/Shayerd/Secret";
import DAshBord from "../Layout/DAshBord";
import Cart from "../Pages/dashbord/cart/Cart";
import Contact from "../Pages/contact/Contact";
import Alluser from "../Pages/dashbord/alluser/Alluser";
import Booking from "../Pages/dashbord/booking/Booking";
import ManageItem from "../Pages/dashbord/manage/ManageItem";
import AdminHome from "../Pages/dashbord/admin/AdminHome";
import AddItem from "../Pages/Additem/AddItem";
import Adminroute from "./Adminroute";
import UpdateItem from "../Pages/dashbord/UpdateItem";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/ourmenu',
            element:<Menu></Menu>
        },
     
        {
            path:'/ourshop/:category',
            element:<OurShop></OurShop>
        },
        {
          path:'/login',
          element:<Login></Login>
      },
        {
          path:'/signup',
          element:<SignIn></SignIn>
      },
        {
          path:'/secret',
          element:<PrivetRoute>
            <Secret></Secret>
          </PrivetRoute>
      },
       

      ]
    },
    {
      path:'/dashbord',
      element:<PrivetRoute> <DAshBord></DAshBord></PrivetRoute>,
    children:[
        {
          path:'cart',
        element:<Cart></Cart>
        },
        {
          path:'contact',
          element:<Contact></Contact>
      },
      // admin path
        {
          path:'users',
          element:<Adminroute><Alluser></Alluser></Adminroute>
      },
        {
          path:'booking',
          element:<Booking></Booking>
      },
        {
          path:'manageitem',
          element:<Adminroute><ManageItem></ManageItem></Adminroute>
      },
        {
          path:'updateitem/:id',
          element:<Adminroute><UpdateItem></UpdateItem></Adminroute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
        {
          path:'additem',
          element:<Adminroute><AddItem></AddItem></Adminroute>
      },
        {
          path:'adminhome',
          element:<Adminroute><AdminHome></AdminHome></Adminroute>
      },
      ]
  },

  ]);