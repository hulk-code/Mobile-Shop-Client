import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth/UseAuth";


const Navbar = () => {
    const{user ,  LogOut}=useAuth()
    const  navOptions=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/order'>My_Order</NavLink></li>
   
    </>

const hanadleLogOut= () => {

    LogOut()
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.error(error);
    })
}
    return (
        <>
        <div className="navbar fixed z-20 bg-opacity-30 h-[100px] bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
              
                    <img className="h-[100px]" src="https://i.ibb.co/8rmjYHV/fashion-removebg-preview.png" alt="" />
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
    <div className="flex items-center lg:mr-2">
    {
      user?.displayName
     }
       {
        user && <div className="avatar">
        <div className="w-10 lg:mr-3 lg:ml-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img  src={user?.photoURL} alt="" />
        </div>
      </div>
       }
    </div>
    

    {
      user ? <button className="btn bg-black text-white ms-3 hover:bg-slate-500" onClick={hanadleLogOut} >Log Out</button> 
      :
      <Link to='/login'>
     <button className="btn bg-black text-white ms-3 hover:bg-slate-500">Login</button>
  </Link>
    }

    <Link to='/register'></Link>
  </div>
 
        </div>
    </>
    );
};

export default Navbar;