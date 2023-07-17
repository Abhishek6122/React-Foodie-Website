import React from 'react';
import './Menu.css';
import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <>
        <div className='menu'>
            <NavLink to = "all">All</NavLink>
            <NavLink to = "pizza">Pizza</NavLink>
            <NavLink to = "burgers">Burgers</NavLink>
            <NavLink to = "drinks">Drinks</NavLink>
        </div>
        <Outlet/>
    </>
  )
}

export default Menu;