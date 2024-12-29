import React from 'react';
import chefimg from '../../assets/home/chef-service.jpg'
const Chefservice = () => {
    return (
        <div className='p-2 relative' >
            <img src={chefimg} alt="" />
            <div className='absolute w-3/4 bg-white p-24 top-20 left-24 items-center text-center'>
                <h2 className='text-2xl my-4 font-semibold uppercase'>Bistro Boss</h2>
                <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Chefservice;