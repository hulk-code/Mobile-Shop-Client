import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
         <div className="text-center">
         <Link to='/'><button className="btn btn-warning bg-orange-600 text-white">Back to home</button>  </Link>
         </div>
         <img className="w-screen" src='https://i.ibb.co/RCmRyvm/404-error-page-svg-animation.gif' alt="" /> 
        </div>
    );
};

export default ErrorPage;