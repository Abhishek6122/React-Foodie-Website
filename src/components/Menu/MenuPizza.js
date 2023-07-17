import React from 'react';
import './Menu.css';
import { MenuPizzaData } from './MenuData';
const MenuPizza = () => {
  return (
    <>
    <div className='menuall'>
        {
            MenuPizzaData.map((menupizzadataval, index) =>{
                return(
                    <div className='box' key={index}>
                        <img src={menupizzadataval.img} alt='error'></img>
                        <div className='name'>{menupizzadataval.name}</div>
                        <div className='price'>{menupizzadataval.price}</div>
                        <a className='order' href='#'>{menupizzadataval.buy}</a>
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default MenuPizza;