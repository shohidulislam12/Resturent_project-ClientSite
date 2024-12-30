import { Helmet } from "react-helmet-async";
import Cover from "../Home/Shayerd/Cover";
import img from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UseMEnu from "../../Hooks/UseMEnu";
import FoodCard from "../../Componets/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const OurShop = () => {
    const {category}=useParams()
    const [menu]=UseMEnu()
const dessert=menu.filter(item=>item.category==='dessert')
const pizza=menu.filter(item=>item.category==='pizza')
const salad=menu.filter(item=>item.category==='salad')
const soup=menu.filter(item=>item.category==='soup')
const offered=menu.filter(item=>item.category==='offered')
const drinks=menu.filter(item=>item.category==='drinks')
const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
    return (
        <div>
              <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <Cover subtitle={'Would you like to try a dish?'} title={'OUR SHOP'} img={img}></Cover>
    
      <Tabs>
    <TabList className='flex items-center justify-center gap-4 p-2'>
      <Tab className='btn btn-outline'>SALAD</Tab>
      <Tab className='btn btn-outline'>PIZZA</Tab>
      <Tab className='btn btn-outline'>DESSERT</Tab>
      <Tab className='btn btn-outline'>SOUP</Tab>
      <Tab className='btn btn-outline'>DRINK</Tab>
    
    </TabList>

    <TabPanel>
   <div className="grid gap-5 md:grid-cols-3 grid-cols-1">
   {
salad.map(item=><FoodCard item={item}></FoodCard>

)}
   </div>
    </TabPanel>
    <TabPanel>
   <div className="grid gap-5 md:grid-cols-3 grid-cols-1">
   {
pizza.map(item=><FoodCard item={item}></FoodCard>

)}
   </div>
    </TabPanel>
    <TabPanel>

   <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid gap-5 md:grid-cols-3 grid-cols-1">
   {
dessert.map(item=><FoodCard item={item}></FoodCard>

)}
   </div>
        </SwiperSlide>
    
      </Swiper>
    </TabPanel>
    <TabPanel>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>   <div className="grid gap-5 md:grid-cols-3 grid-cols-1">
   {
dessert.map(item=><FoodCard item={item}></FoodCard>

)}
   </div></SwiperSlide>
        
      </Swiper>
    </TabPanel>
    <TabPanel>
   <div className="grid gap-5 md:grid-cols-3 grid-cols-1">
   {
drinks.map(item=><FoodCard item={item}></FoodCard>

)}
   </div>
    </TabPanel>

  </Tabs>

        </div>
    );
};

export default OurShop;