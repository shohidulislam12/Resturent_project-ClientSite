import { useEffect, useState } from "react";
import SectionTitle from "../../Componets/Sectiontitle/SectionTitle";

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@smastrom/react-rating/style.css'


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

const Textimonials = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
fetch('http://localhost:5000/reviwes')
.then(res=>res.json())
.then(data=>setReview(data))
    },[])
    return (
        <div className="">
            <SectionTitle heading={'TESIMONIALS'} subheading={'What Out Client Say'}>

            </SectionTitle>
 
         <h2 className="text-2xl mx-auto  text-center">REVIEW: {review.length}</h2>
            <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-10"
      >
      
      <div className="flex flex-col items-center justify-center">
  {review.map((rev) => (
    <SwiperSlide key={rev._id}>
      <div className="flex  flex-col items-center text-center  p-4">
        <Rating
          style={{ maxWidth: 180 }}
          value={rev.rating}
          readOnly
          className="w-full"
        />
      </div>
      <div className="text-center w-3/4 mx-auto">
        <p>{rev.details}</p>
        <p className="text-3xl text-red-400">{rev.name}</p>
      </div>
    </SwiperSlide>
  ))}
</div>
      </Swiper>


        </div>
    );
};

export default Textimonials;