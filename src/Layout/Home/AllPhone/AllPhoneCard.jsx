

const AllPhoneCard = ({ phone }) => {
  const { name, type, processor, memory, OS, price, img } = phone;

  return (
    <div>
      <div className="card card-compact w-9/12 mx-auto bg-zinc-300 h-[350px] hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body relative">
        <div className="absolute inset-0 gradient-to-br transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

          <h2 className="card-title">{name}</h2>
          <p>{type}</p>
          <div className="flex">
            <p>{processor}</p>
            <p>{memory}</p>
          </div>
          <div className="flex">
            <p>{OS}</p>
            <p>{price}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPhoneCard;
