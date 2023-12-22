import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Shared/Navbar/Navbar";
import Footer from "../Layout/Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
           
        </div>
    );
};

export default Root;