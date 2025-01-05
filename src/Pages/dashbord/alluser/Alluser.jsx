import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiouSecure from '../../../Hooks/useAxiouSecure';
import { FaEdit, FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Alluser = () => {
    const axiousSecure  =useAxiouSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res=await axiousSecure.get('/users')
       return res.data
        }
        
    })
    console.log(users)


const handleDelete= user=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

     axiousSecure.delete(`/user/${user._id}`)
     .then(res=>{
         Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
 refetch()
     } )
    

  
        }
      });
}
const handleupdateRule= user=>{

    Swal.fire({
        title: "Are you sure Set Admin?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!"
      }).then((result) => {
        if (result.isConfirmed) {

     axiousSecure.patch(`/users/admin/${user._id}`)
     .then(res=>{
         Swal.fire({
            title: "Updated!",
            text: "Role has been Updated.",
            icon: "success"
          });
 refetch()
     } )
    

  
        }
      });
}




    return (
        <div >
    <div className='flex justify-evenly'>
    <h2 className='text-3xl'>All Users </h2>
    <h2 className='text-3xl'>Total Usres :{users.length}</h2>
    </div>
{/* users */}

<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,i)=>
            <tr key={i}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
       {
        user.role==='admin'?"Admin": <button onClick={()=>handleupdateRule(user)} className="btn btn-ghost btn-lg text-sm text-white bg-orange-400"><FaUser/></button>
       }
        </td>
        <td>
       
         <button onClick={()=>handleDelete(user)}  className={`btn btn-ghost btn-lg text-sm text-white bg-orange-400`}> <FaTrashAlt/></button> </td>
      </tr>
        )
      }
      
   
      
    </tbody>
  </table>
</div>






        </div>
    );
};

export default Alluser;
