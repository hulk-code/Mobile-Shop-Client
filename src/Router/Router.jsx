import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import PhoneDetails from "../Layout/Home/AllPhone/PhoneDetails/PhoneDetails";
import Order from "../Layout/Order/Order";
import SignUp from "../UserAccount/SignUp/SignUp";
import LogIn from "../UserAccount/Login/Login";
import PrivateRoute from "../Authentication/PrivateRoute/PrivateRoute";
import ErrorPage from "../Layout/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><PhoneDetails></PhoneDetails></PrivateRoute>,
        },
        
        {
          path: "/order",
          element:<PrivateRoute><Order></Order></PrivateRoute>,
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>,
        },
        {
          path: "/login",
          element:<LogIn></LogIn>,
        },

      ],
    },
  ]);
  export default router ;