import React from 'react';

const Review = ({rev}) => {
    const {name, review, photo, rating} = rev
    return (
        <div>
            <div className=' shadow-lg rounded-lg p-5 md:h-[600px]'>
                <img className='w-[300px] mx-auto rounded-full  h-[300px]' src={photo} alt="" />
                <h4 className='text-3xl mt-5 text-gray-800 font-bold'>{name}</h4>
                <p className='mt-5 font-semibold text-orange-500'>{rating}</p>
                <p className='text-gray-700'>{review}</p>
            </div>
        </div>
    );
};

export default Review;