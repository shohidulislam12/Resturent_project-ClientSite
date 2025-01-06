import React from 'react';
import SectionTitle from '../../Componets/Sectiontitle/SectionTitle';
import { useForm } from "react-hook-form"
import { FaUtensils } from 'react-icons/fa6';
import useAxiousPublic from '../../Hooks/useAxiousPublic';
import useAxiouSecure from '../../Hooks/useAxiouSecure';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
const image=import.meta.env.VITE_IMAGEBBKEY
const imageHostingApi=`https://api.imgbb.com/1/upload?key=${image}`
const UpdateItem  = () => {
    const item = useLoaderData();
    console.log("item", item);
 const   axiousPublic =useAxiousPublic()
 const axiousSecure  =useAxiouSecure()
    const { register, handleSubmit,reset} = useForm()
    const onSubmit = async(data) => {
        const imageFile={image:data.image[0]}
        const res=await axiousPublic.post(imageHostingApi,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        if(res.data.success){
            // now data sent server 
     
            const menuItem={
                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
                image:res.data.data.display_url

            }
            // set database
            const menures=await axiousSecure.patch(`/menu/${item._id}`,menuItem)
            console.log("menuitem database",menures.data)
            if(menu.data.midifiedCount>0){
               // reset()
                console.log('Updated')
                alert("item Update Sucess")
            }
        }
      
    }
  return (
    <div>
      <SectionTitle
        subheading={"REfresh Information "}
        heading={"Update an Item "}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control my-6 w-full gap-4">
            <div className="label ">
              <span className="label-text">Recipe Name *</span>
            </div>
            <input defaultValue={item.name}
              {...register("name")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              required
            />
          </label>
          <div className="flex mx-auto gap-6 items-center justify-center">
            <select
              defaultValue={item.category}
              {...register("category")}
              className="select select-bordered  w-full "
              required
            >
              <option disabled value="category">
                Select a Category
              </option>
              <option>salad</option>
              <option>drinks</option>
              <option>offered</option>
              <option>soup</option>
              <option>pizza</option>
              <option>dessert</option>
              <option>popular</option>
            </select>
            <label className="form-control my-6 w-full gap-4">
              <input
              defaultValue={item.price}
                {...register("price")}
                type="number"
                placeholder="price here"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>
          <div className="label ">
            <span className="label-text">Recipe details *</span>
          </div>
          <textarea 
          defaultValue={item.recipe}
            {...register("recipe")}
            placeholder="recipe Details"
            className="textarea   textarea-bordered w-full "
            required
          ></textarea>
          {/* sm */}
          <label className="form-control  my-5 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Chose a file</span>
            </div>
            <input 
          
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              required
            />
          </label>

          <button className="btn bg-orange-400 m-2 ">
            Update Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
