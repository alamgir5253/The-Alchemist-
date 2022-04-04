import React from 'react';
import useReviews from '../../Hook/CustomHook';
import Review from '../../Components/review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews([])
    console.log(reviews)
    return (
        <div>
            <h1 className='text-slate-900 text-3xl font-bold text-center my-20 uppercase'>Reviews</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-5'>
                {
                    reviews.map(rev =><Review key={rev.id} rev={rev}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;