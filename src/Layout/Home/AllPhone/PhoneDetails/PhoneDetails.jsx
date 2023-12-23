import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Swal from "sweetalert2";

const PhoneDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState("");
  const alldata={...product}

  useEffect(() => {
    fetch(`http://localhost:5000/phonesDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
//   console.log(product);


  const handleAddToCart = (data) =>{
    console.log(data);
    // const allData = {...data, user.email}
    fetch('http://localhost:5000/addToCart',{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log("posted data", data);
        if(data.insertedId){
            Swal.fire({
                icon:'success',
                title: 'cart added successfully'
            })
        }
    })
}
  return (
    <div>


      <div
        className="hero min-h-screen "
        style={{ backgroundImage: "url(https://i.ibb.co/MfGgKvN/banar3.webp)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>

            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
      <div className="overflow-x-auto mt-6">
        <img  className="h-[400px] mx-auto" src={product.img} alt="" />
        <h1 className="text-center text-3xl font-bold">FULL SPECIFICATION</h1>
  <table className="table mt-5 ">
    
    <tbody>
      {/* row 1 */}
      <tr>
      
        <td>Name</td>
        <td>{product.name}</td>
       
      </tr>
      {/* row 2 */}
      <tr className="hover">
      
        <td>TYPE</td>
        <td>{product.type}</td>
       
      </tr>
      {/* row 3 */}
      <tr>
        <td>Processor</td>
        <td>{product.processor}</td>
        
      </tr>
      <tr>
        <td>Memory</td>
        <td>{product.memory}</td>
        
      </tr>
      <tr>
        <td>Opereting System</td>
        <td>{product.OS}</td>
        
      </tr>
      <tr>
        <td>Price</td>
        <td>${product.price}</td>
        
      </tr>
    </tbody>
  </table>
</div>
<div className="text-center mt-3 mb-3">
<button onClick={()=>handleAddToCart(alldata)} className="btn w-1/2 relative inline-flex items-center justify-start overflow-hidden transition-all bg-slate-400 rounded hover:bg-white group">

 
<span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
<span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
  Add_To_Cart
</span>
</button>
</div>

      </div>
    </div>
  );
};

export default PhoneDetails;
