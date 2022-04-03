import React from 'react';

const Review = ({rev}) => {
    const {name, review, photo, rating} = rev
    return (
        <div>
            <div className=' shadow-lg rounded-lg'>
                <img src={photo} alt="" />
                <h4>{name}</h4>
                <p>{rating}</p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;