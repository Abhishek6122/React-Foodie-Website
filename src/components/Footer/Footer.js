import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className='social_icons'>
        <a href='#'><i className="fa-brands fa-instagram"></i></a>
        <a href='#'><i className="fa-brands fa-facebook"></i></a>
        <a href='#'><i className="fa-brands fa-youtube"></i></a>
        <a href='#'><i className="fa-brands fa-twitter"></i></a>
      </div>
      <div className='nav'>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/chefs">Chefs</NavLink>
            <NavLink to="/login">Login</NavLink>
      </div>
      <div className='nav2'>
            <a href='#'>Contact</a>
            <NavLink to="/blog">Blog</NavLink>
            <a href='#'>Catering</a>
            <a href='#'>Delievery</a>
      </div>
      <div className='openings'>
            <h1>Opening Hours</h1>
            Monday to Saturday: 10:00 Am - 11:00 PM<br></br>
            Sunday Closed
      </div>
      <div className='rights'>
          <h2>Delecius Fast Food</h2>
          <h1>Foodie Master | All Rights Reserved</h1>
      </div>
    </footer>
  )
}

export default Footer;