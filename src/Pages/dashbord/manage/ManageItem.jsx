import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAxiouSecure from "../../../Hooks/useAxiouSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../Componets/Sectiontitle/SectionTitle";
import UseMEnu from "../../../Hooks/UseMEnu";
import { Link } from "react-router-dom";

const ManageItem = () => {
 
  const [menu,,refetch] = UseMEnu();
  const axiousSecure = useAxiouSecure();

  console.log("cart");

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( (result) => {
      if (result.isConfirmed) {
        console.log(id);
       axiousSecure.delete(`/menu/${id}`)
      .then((res) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          console.log(res.data)
          refetch();
        });
      }
    });
  };
const   handleEdite=(id)=>{
    
  }
  return (
    <div className="mt-0">
      <SectionTitle className="mt-0" subheading={"Hurry Up "} heading={"Manage Item"} />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>serial</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.name}
                    </span>
                  </td>
                  <td>{item.price}$</td>
                  <th>
                    <Link to={`/dashbord/updateitem/${item._id}`}
                     
                      className="btn btn-ghost btn-lg text-green-500"
                    >
                      {" "}
                      <FaEdit />
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg text-red-500"
                    >
                      {" "}
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
