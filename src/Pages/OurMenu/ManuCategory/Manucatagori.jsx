import { Link } from "react-router-dom";
import Cover from "../../Home/Shayerd/Cover";
import MenuItem from "../../Home/Shayerd/MenuItem";

const Manucatagori = ({ items, title, subtitle, img,catagory }) => {
  return (
    <div className="my-20">
      {title && <Cover subtitle={subtitle} title={title} img={img}></Cover>}
      <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center ">
        <Link to={`/ourshop/${title}`} className="btn btn-outline border-0 border-b-2">
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

export default Manucatagori;
