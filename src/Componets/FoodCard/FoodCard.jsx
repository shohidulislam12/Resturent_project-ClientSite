
const FoodCard = ({item}) => {

    return (
        <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={item.image}
            alt="food"
            className="rounded-xl" />
        </figure>
        <p className="bg-black  text-white absolute right-7 top-10 p-1 mr-4 mt-4">${item.price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <p className="text-left">{item.recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline bg-slate-200 border-0 border-b-2 border-black border-gray-400">Add To Card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;