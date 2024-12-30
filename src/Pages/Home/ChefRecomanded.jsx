import SectionTitle from "../../Componets/Sectiontitle/SectionTitle";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const ChefRecomanded = () => {
const [menu,setmenu]=useState([])

    useEffect(()=>{
fetch('public/menu.json')
.then(res=>res.json())
.then(data=>{
   
    setmenu(data)})
    },[])


    return (
        <div>
            <SectionTitle subheading={'Should Try'} heading={"CHEF RECOMMENDS"}>

            </SectionTitle>
            <Swiper
       
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        {
            menu.map(item=>
                
                           <SwiperSlide className="w-[440px]" key={item._id}>
                           <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="food"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.category}</p>
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-2 border-gray-400">Add To Card</button>
    </div>
  </div>
</div>
                           </SwiperSlide>
           
            )
        }
      </Swiper>


        </div>
    );
};

export default ChefRecomanded;