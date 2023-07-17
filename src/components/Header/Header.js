import React from 'react';
import './Header.css';
import { NavLink, Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header>
        <NavLink to="/" title='Foodie Master'>
            <img className='logo' src='https://wallpaperaccess.com/full/4327143.jpg'></img>
        </NavLink>
        <nav>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink>
            <ul>
                <li><NavLink to = "menu/all">All</NavLink></li>
                <li><NavLink to = "menu/pizza">Pizza</NavLink></li>
                <li><NavLink to = "menu/burgers">Burgers</NavLink></li>
                <li><NavLink to = "menu/drinks">Drinks</NavLink></li>
            </ul>
            </li>
            <li><NavLink to="/offers">Offers</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default Header;