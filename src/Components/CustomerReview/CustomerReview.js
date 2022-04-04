import React from 'react';

const CustomerReview = ({rev}) => {
    const {name, photo, rating, review} = rev
    return (
        <div className='border-gray-900 p-5 '>
            <div>
                <img className='w-[300px] mx-auto rounded-full  h-[300px]  ' src={photo} alt="" />
            <h4 className='text-3xl mt-5 text-gray-800 font-bold'>{name}</h4>
            <p className='mt-5 font-semibold text-orange-500'> Rating {rating}</p>
            <p className='text-gray-700'>{review}</p>
            </div>
        </div>
    );
};

export default CustomerReview;