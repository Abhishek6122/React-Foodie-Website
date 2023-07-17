import React from 'react'
import './Menu.css';
import { MenuBurgersData } from './MenuData';

const MenuBurgers = () => {
  return (
    <>
    <div className='menuall'>
        {
            MenuBurgersData.map((menuburgersdataval, index) =>{
                return(
                    <div className='box' key={index}>
                        <img src={menuburgersdataval.img} alt='error'></img>
                        <div className='name'>{menuburgersdataval.name}</div>
                        <div className='price'>{menuburgersdataval.price}</div>
                        <a className='order' href='#'>{menuburgersdataval.buy}</a>
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default MenuBurgers;