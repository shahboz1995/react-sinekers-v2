import React from 'react'
import {BiSearch} from 'react-icons/bi'

import "./Sorch.css"

export const Sorch = () => {
  return (
    <div className='sorchContener'>
      <div className='sorchSnikers'>
      <div >
        <p>Все кроссовки</p>
      </div>
      <div className='seorch'>
        <div className='seorchIcons'>
          <BiSearch size={18} />
        </div>
      <input className='sorchInput' type="text" id="lname" placeholder='Поиск...'/>
      </div>

      </div>
    </div>
  )
}


