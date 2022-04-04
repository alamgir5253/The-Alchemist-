import React from 'react';
import NFound from '../../image/404-pnf.webp'
const NotFound = () => {
    return (
        <div className='p-3  grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center '>
            <h1 className='text-gray-500 text-center py-5 font-bold font-sans text-lg lg:text-4xl md:text-2xl'> sorry... page not found</h1>
            <img className='w-full h-full rounded-2xl' src={NFound} alt="" />
            
        </div>
    );
};

export default NotFound;