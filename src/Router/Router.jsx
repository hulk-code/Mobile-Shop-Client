import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import PhoneDetails from "../Layout/Home/AllPhone/PhoneDetails/PhoneDetails";
import Order from "../Layout/Order/Order";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/details/:id",
          element: <PhoneDetails></PhoneDetails>,
        },
        
        {
          path: "/order",
          element:<Order></Order>,
        },

      ],
    },
  ]);
  export default router ;