import React from 'react';
import Footer from './Shayerd/Footer';
import Banner from './BAnner';
import OrderOnline from './OrderOnline';
import Chefservice from './Chefservice';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Textimonials from './Textimonials';
import ChefRecomanded from './ChefRecomanded';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <Chefservice></Chefservice>
            <PopularMenu></PopularMenu>
            <ChefRecomanded></ChefRecomanded>
            <Featured></Featured>
            <Textimonials></Textimonials>
           
          
        </div>
    );
};

export default Home;