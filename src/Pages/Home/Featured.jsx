import SectionTitle from "../../Componets/Sectiontitle/SectionTitle";
import "./featured.css";
import featuredimg from "../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="featureditem bg-fixed my-20 pt-10">
      <SectionTitle
        heading={"Featured Item"}
        subheading={"Chech it Out"}
      ></SectionTitle>
      <div className="flex md:flex-row flex-col justify-center items-center py-6 gap-10 px-16">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:my-10 bg-slate-500 bg-opacity-40 text-white">
          <p>
       <span className="text-2xl ">
       March 20, 2023 WHERE CAN I GET SOME?</span> <br />
        Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="btn border-0 border-b-4  btn-outline text-white">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
