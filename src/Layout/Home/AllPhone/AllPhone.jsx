import { useEffect, useState } from "react";
import AllPhoneCard from "./AllPhoneCard";

const AllPhone = () => {
  const [allPhone, setAllPhone] = useState([]);
  const [search, setSearch] = useState("");
  const [displayedPhones, setDisplayedPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://mobile-shop-server-liard.vercel.app/phones")
      .then((res) => res.json())
      .then((data) => {
        setAllPhone(data);
        setDisplayedPhones(data.slice(0, 6)); // Initial display of 6 items
      });
  }, []);

  const handleSeeMore = () => {
    setDisplayedPhones(showAll ? allPhone : allPhone.slice(0, 6));
    setShowAll(!showAll);
  };

  return (
    <div className="p-9">
      <h1 className="text-3xl font-bold text-center p-2">Our Product</h1>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="card w-full shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Search By Name And Price{" "}
                  </span>
                </label>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search By Name"
                  className="input input-bordered"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-6">
        {displayedPhones
          .filter((item) => {
            const lowerCaseSearch = search.toLowerCase();
            const lowerCaseName = item.name.toLowerCase();
            const lowerCasePrice = item.price.toLowerCase();

            return (
              lowerCaseSearch === "" ||
              lowerCaseName.includes(lowerCaseSearch) ||
              lowerCasePrice.includes(lowerCaseSearch)
            );
          })
          .map((phone) => (
            <AllPhoneCard key={phone._id} phone={phone}></AllPhoneCard>
          ))}
      </div>
      <div className="text-center mt-3 mb-3">
        <button onClick={handleSeeMore} className="btn w-1/2">
          {showAll ? "See More" : "See Less"}
        </button>
      </div>
    </div>
  );
};

export default AllPhone;
