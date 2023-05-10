import React from 'react'
import { Wrapper,Header,Sorch,Card } from "../../index";
import { CardCantener } from '../../CardContener/CardCantener'
import data from '../../../data';
import { useSelector } from 'react-redux';



export const Home = () => {

  const {allSneakers} = data;
  const state = useSelector((state) => state);
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

