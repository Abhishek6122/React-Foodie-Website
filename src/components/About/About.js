import React from 'react';
import './About.css';
import { useState } from 'react';

const About = () => {
  const [btnstate, setbtnstate] = useState(false);

  let change = () =>{
    setbtnstate(true);
  }
  let togglebtn = btnstate ? ' active' : '';
  return (
    <>
    <div className='about'>
        <h1 className='aboutheading'>We're passionate about our food</h1>
        <div className='aboutus_info'>
          <div className='info'>
          <div className='icon'><i className="fa-solid fa-truck"></i></div>
            <h1>Free Shipping</h1>
            <p>Gets free shpping on your first order</p>
          </div>
          <div className='info'>
          <div className='icon'><i className="fa-solid fa-bowl-food"></i></div>
          <h1>Variety of Dishes</h1>
          <p>We have variety of foods like pizza, burgers, drinks, french fries and many more</p>
          </div>
          <div className='info'>
          <div className='icon'><i className="fa-solid fa-clock"></i></div>
          <h1>30 Minutes Delivery</h1>
          <p>Gets your food in 30 min</p>
          </div>
        </div>
    </div>
    {/* <p className='historyheading'>History</p> */}
    {/* <h1 className='historyheading2'>Our Journey starts way back in 1975</h1> */}
    <h1 className='image_galleryheading'>Image Gallery</h1>
    <div className='image_gallery'>
        <img src='https://wallpaperaccess.com/full/3667703.jpg' className='active'></img>
        <img src='https://wallpaperaccess.com/full/3667707.jpg'></img>
        <img src='https://wallpaperaccess.com/full/1306135.jpg'></img>
        <img src='https://www.thespruceeats.com/thmb/X_JGM04VusvkuGqTVan4QmBRqjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg'></img>
        <img src='https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto/starbucksheader0.jpg'></img>
        <img src='https://wallpaperaccess.com/full/3667860.jpg'></img>
        <ion-icon name="arrow-back-outline" id = "backbtn" onClick={backbtn}></ion-icon>
        <ion-icon name="arrow-forward-outline" id = "nextbtn" onClick={nextbtn}></ion-icon>
    </div>
    {/* <button className={`usstate${togglebtn}`} onClick={change}>Change</button> */}
    {/* <button className={`usstate${togglebtn}`} onClick={change}>Change</button> */}
    </>
  )
}

export default About;

  
let slideindex = 0;

let backbtn = () =>{
  let images = document.querySelectorAll(".image_gallery img");
  images[slideindex].classList.remove('active');
  if(slideindex === 0){
      slideindex = images.length - 1;
  }
  else{
    slideindex--;
  }
  images[slideindex].classList.add('active');
}

let nextbtn = () =>{
  let images = document.querySelectorAll(".image_gallery img");
  images[slideindex].classList.remove('active');
  if(slideindex === images.length - 1){
      slideindex = 0;
  }
  else{
    slideindex++;
  }
  images[slideindex].classList.add('active');
}