import React from 'react'
import { BiCart, BiHeart, BiUserCircle } from 'react-icons/bi'
import { Silayder } from '../Silayder/Silayder'
import { Wrapper } from '../Wrapper'

import "./Haeder.css"

export const Header = () => {
  return (
    <div className='haeder'>
    <div className='headerContainer'>
      <div className='headerLeft'>
        <img className='logo' src="/img/logo.png" alt="" />
        <div className='haederfont'>
          <p className='headerfonts'>REACT SNEAKERS</p>
          <p className='headerMagazin'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className='headerRight'>
        <span className='iconsCart'>
          <BiCart />
        </span>
        <span>1205 руб.</span>
        <span className='iconsHeart'>
          <BiHeart/>
        </span>
        <span className='iconsUser'>
          <BiUserCircle/>
        </span>
      </div>
    </div>
    <Wrapper>
      <Silayder/>
    </Wrapper>
    </div>
  )
}
