import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../../../../assets/istockphoto-1029185928-1024x1024.jpg";

const PhoneDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/phonesDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  console.log(product);
  return (
    <div>
      <div
        className="hero min-h-screen"
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

        
      </div>
    </div>
  );
};

export default PhoneDetails;
