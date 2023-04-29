import React from 'react'
import { Wrapper,Header,Sorch,Card } from "../../index";
import { CardCantener } from '../../CardContener/CardCantener'
import data from '../../../data';


export const Home = () => {

  const {allSneakers} = data
//  console.log(allSneakers);
  return (
    <div className='homeCantener'>
      <Wrapper>
      <Header/>
      <Sorch/>
      <CardCantener items={allSneakers}/>
      </Wrapper>
      
    </div>
  )
}

