
import 'swiper/css';
import 'swiper/css/pagination';
import slid1 from '../../assets/home/slide1.jpg'
import slid2 from '../../assets/home/slide2.jpg'
import slid3 from '../../assets/home/slide3.jpg'
import slid4 from '../../assets/home/slide4.jpg'
import slid5 from '../../assets/home/slide5.jpg'



// import required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../Componets/Sectiontitle/SectionTitle';

const OrderOnline = () => {
    return (
        <>
      <section>
        <SectionTitle heading={'ORDER ONLINE'} subheading={'From 11:00am to 10:00pm'}></SectionTitle>
      </section>
                  <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 mb-20"
      >
        <SwiperSlide><img src={slid1} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>Salads</h3></SwiperSlide>
        <SwiperSlide><img src={slid2} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>Pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slid3} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>soups</h3></SwiperSlide>
        <SwiperSlide><img src={slid4} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>desert</h3></SwiperSlide>
        <SwiperSlide><img src={slid5} alt="" />
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>Salads</h3></SwiperSlide>
     
      </Swiper>
        </>
    );
};

export default OrderOnline;