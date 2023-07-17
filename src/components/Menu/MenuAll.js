import React, { useContext } from 'react'
import './Menu.css';
import { MenuAllData } from './MenuData';

const MenuAll = () => {
  return (
    <>
    <div className='menuall'>
        {
            MenuAllData.map((menualldataval, index) =>{
                return(
                    <div className='box' key={index}>
                        <img src={menualldataval.img} alt='error'></img>
                        <div className='name'>{menualldataval.name}</div>
                        <div className='price'>{menualldataval.price}</div>
                        <a className='order' href='#'>{menualldataval.buy}</a>
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default MenuAll;