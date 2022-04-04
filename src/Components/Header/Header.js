import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='text-center py-6 grid sm:grid-flow-col justify-center items-center gap-4 uppercase  bg-yellow-500'>
                <NavLink to= 'home' className={({isActive})=> isActive ? 'active' : 'normal'}>home</NavLink>
                <NavLink to= 'reviews' className={({isActive})=> isActive ? 'active' : 'normal'}>reviews</NavLink>
                <NavLink to= 'dash-board' className={({isActive})=> isActive ? 'active' : 'normal'}>dash-board</NavLink>
                <NavLink to= 'blogs' className={({isActive})=> isActive ? 'active' : 'normal'}>blogs</NavLink>
                <NavLink to= 'about' className={({isActive})=> isActive ? 'active' : 'normal'}>about</NavLink>
            </div>
        </div>
    );
};

export default Header;