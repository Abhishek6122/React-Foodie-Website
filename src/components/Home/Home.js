import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Offers from '../Offers/Offers';

const Home = () => {
  return (
    <>
    <div className='banner'>
        <img src='https://wallpaperaccess.com/full/1312727.jpg' alt='error'></img>
        <img src='https://wallpaperaccess.com/full/1184222.jpg' alt='error' ></img>
        <img src='https://wallpaperaccess.com/full/424516.jpg' alt='error' ></img>
        <img src='https://wallpaperaccess.com/full/1747271.jpg' alt='error'></img>
        <div className='get_started'>
            <span>Good Food</span>, Good Mood<br></br>
              <NavLink to = "/menu/all">Get Started</NavLink>
        </div>
    </div>
    <Offers/>
    </>
  )
}

export default Home;