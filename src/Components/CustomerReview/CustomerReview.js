import React from 'react';

const CustomerReview = ({rev}) => {
    const {name, photo, rating, review} = rev
    return (
        <div>
            <img src={photo} alt="" />
            <h4>{name}</h4>
            <p>{rating}</p>
            <p>{review}</p>
        </div>
    );
};

export default CustomerReview;