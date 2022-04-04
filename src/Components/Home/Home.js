import React from 'react';
import './Home.css'
import alchemist from '../../image/alchemist.jpg'
import useReviews from '../../Hook/CustomHook'
import CustomerReview from '../CustomerReview/CustomerReview'
import { NavLink } from 'react-router-dom';
const Home = () => {
    const  [reviews] = useReviews()
    return (
        <div className=''>
            <div className='px-20 md:flex h-[100vh] justify-between items-center'>
                <div className='w-2/3'>
                    <h1 className='text-3xl mb-6 font-bold font-sans text-gray-700'>"The Alchemist" by Paulo Coelho</h1>
                    <p className='text-sm pr-20 text-gray-600 font-semibold'>It is a story of a shepherd , Santiago, who leaves his flock and his land to pursue his dream. A boy who is on a
                        journey of discovering his destiny and realising his dream of finding a treasure...</p>
                        <button className='bg-amber-500 py-2 text-white rounded mt-5 px-3'>see more</button>
                </div>
                <div className='w-2/6'>
                    <img className='w-full' src={alchemist} alt="al" />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
               {
                   reviews.slice(0,3).map(rev => <CustomerReview key={rev.id} rev={rev}></CustomerReview> )
               }
            </div>
            <div className='flex justify-center my-5 bg-amber-500  mx-auto py-2 px-4 rounded-lg '>
            <NavLink to= '/reviews' className={({isActive})=> isActive ? 'active' : 'normal'}>reviews</NavLink>
            </div>
        </div>
    );
};

export default Home;