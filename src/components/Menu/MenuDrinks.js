import React from 'react'
import './Menu.css';
import { MenuDrinksData } from './MenuData';

const MenuDrinks = () => {
  return (
    <>
    <div className='menuall'>
    {
        MenuDrinksData.map((menudrinksval, index) =>{
            return(
                <div className='box' key={index}>
                    <img src={menudrinksval.img} alt='error'></img>
                    <div className='name'>{menudrinksval.name}</div>
                    <div className='price'>{menudrinksval.price}</div>
                    <a className='order' href='#'>{menudrinksval.buy}</a>
                </div>
            )
        })
    }
    
    </div>
    </>
  )
}

export default MenuDrinks;