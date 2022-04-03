import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div>
                <NavLink to= 'home' className={({isActive})=> isActive ? 'active' : 'normal'}>home</NavLink>
                <NavLink to= 'reviews' className={({isActive})=> isActive ? 'active' : 'normal'}>reviews</NavLink>
                <NavLink to= 'reviews' className={({isActive})=> isActive ? 'active' : 'normal'}>reviews</NavLink>
                <NavLink to= 'dash-board' className={({isActive})=> isActive ? 'active' : 'normal'}>dash-board</NavLink>
                <NavLink to= 'contact' className={({isActive})=> isActive ? 'active' : 'normal'}>contact</NavLink>
                <NavLink to= 'about' className={({isActive})=> isActive ? 'active' : 'normal'}>about</NavLink>
            </div>
        </div>
    );
};

export default Header;