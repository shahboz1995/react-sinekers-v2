import React from 'react'
import data from '../../data'
import {Card} from '../Card/Card'

import "./CardCantener.css"

export  const CardCantener = ({items}) => {
  // console.log(data);
  return (
    <div className='cardContener'>
      {items.map((item)=>{
        return <Card key={item.id} item={item} />
      })} 
    </div>
  )
}


