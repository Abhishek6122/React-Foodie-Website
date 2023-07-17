import React from 'react';
import './Offers.css'
const Offers = () => {
  return (
    <>
        <h1 className='offersheading'>Offers</h1>
        <div className='menubox'>
        <div className='img'><img src='https://wallpaperaccess.com/full/1312736.jpg'></img>
        <div className='buy'>
            American Burgers<br></br>
            50% off<br></br>
            <a href='#'>Order Now</a>
        </div>
        </div>
        <div className='img'><img src='https://wallpaperaccess.com/full/1184045.jpg'></img>
        <div className='buy'>
            French Fries<br></br>
            40% off<br></br>
            <a href='#'>Order Now</a>
        </div>
        </div>
        <div className='img'><img src='https://wallpaperaccess.com/full/6973803.jpg'></img>
        <div className='buy'>
            Cold Coffee<br></br>
            60% off<br></br>
            <a href='#'>Order Now</a>
        </div>
        </div>
        <div className='img'><img src='https://wallpaperaccess.com/full/462773.jpg'></img>
        <div className='buy'>
            Delicious Pizza<br></br>
            50% off<br></br>
            <a href = "#">Order Now</a>
        </div>
        </div>
    </div>
    </>
  )
}

export default Offers;