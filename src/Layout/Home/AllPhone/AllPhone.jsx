import { useEffect, useState } from "react";
import AllPhoneCard from "./AllPhoneCard";


const AllPhone = () => {
    const [allPhone , setAllPhone]=useState([])
    const [search , setSearch]=useState('')
    console.log(search);
    useEffect(() =>{
         fetch('http://localhost:5000/phones')
         .then(res => res.json())
         .then(data => {
            setAllPhone(data)
         })

    },[])
    // console.log(allPhone);
    return (
        <div className="p-9"> 

        
            <h1 className="text-3xl font-bold text-center p-2 ">
                Our Product
            </h1>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card  w-full  shadow-2xl ">
      <form className="card-body" >
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Search By Name </span>
          </label>
          <input onChange={(e) => setSearch(e.target.value)}  type="text" placeholder="Search By Name" className="input input-bordered"/>
        </div>
       
        
      </form>
    </div>
  </div>
</div>
            <div className="grid grid-cols-3 space-y-6 ">
                {
                    allPhone.filter((item) =>{

                        return search.toLowerCase()=== '' ? item : item.name.toLowerCase().includes(search)
                    }). map(phone => <AllPhoneCard key={phone._id} phone={phone} ></AllPhoneCard>)
                }
            </div>
        </div>
    );
};

export default AllPhone;