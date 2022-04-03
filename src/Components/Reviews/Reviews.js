import React from 'react';
import useReviews from '../../Hook/CustomHook';
import Review from '../../Components/review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews([])
    console.log(reviews)
    return (
        <div>
            <h1>Reviews</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 px-5'>
                {
                    reviews.map(rev =><Review key={rev.id} rev={rev}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;