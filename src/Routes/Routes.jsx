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
  ]);