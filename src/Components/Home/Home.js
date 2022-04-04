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
            <div className='p-5 grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between items-center'>
                <div className=' order-2 md:order-1 mt-5 text-center md:text-left'>
                    <h1 className='text-2xl md:text-3xl mb-6 font-bold font-sans text-gray-700' >" <span className='text-yellow-900'>The Alchemist</span> " <br /> - by Paulo Coelho -</h1>
                    <p className='text-sm  text-gray-600 font-semibold'>It is a story of a shepherd , Santiago, who leaves his flock and his land to pursue his dream. A boy who is on a
                        journey of discovering his destiny and realising his dream of finding a treasure...</p>
                        <button className='bg-amber-500 py-2 text-white rounded mt-5 px-3'>see more</button>
                </div>
                <div className=' order-1 md:order-2'>
                    <img className=' rounded m h-96 mx-auto' src={alchemist} alt="al" />
                </div>
            </div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20 '>
               {
                   reviews.slice(0,3).map(rev => <CustomerReview key={rev.id} rev={rev}></CustomerReview> )
               }
            </div>
            <div className='flex justify-center '>
            <NavLink to= '/reviews' className=' my-5 bg-amber-500  mx-auto py-2 px-8 rounded-lg text-white'>reviews</NavLink>
            </div>
        </div>
    );
};

export default Home;