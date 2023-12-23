import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import PhoneDetails from "../Layout/Home/AllPhone/PhoneDetails/PhoneDetails";

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
      ],
    },
  ]);
  export default router ;