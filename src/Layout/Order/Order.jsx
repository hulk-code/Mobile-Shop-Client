
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Order = () => {
    const [addCarts , setAddCarts]=useState([])
    // const [control, setControl]= useState(false);
   
   
    useEffect(() =>{
    fetch('http://localhost:5000/addToCart')
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      setAddCarts(data)
    })
    },[])

  
    return (
        <div className="mb-10">
         <div className="grid grid-cols-1 lg:grid-cols-3">
      {addCarts?.map(data => (
        <Link key={data._id}> {/* Use Link to create a clickable card */}
          <div className="card w-96 bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.img} alt="Shoes" className="rounded-xl w-[350px] h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.name}</h2>
              <h2 className="card-title">{data.type}</h2>
              <h2 className="card-title">{data.Price}</h2>
              <h2 className="card-title">{data.OS}</h2>
             
             
            </div>
          </div>
        </Link>
      ))}
    </div>   
        </div>
    );
};

export default Order;