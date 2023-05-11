import React, {useEffect} from 'react'
import { Wrapper,Header,Sorch,Card } from "../../index";
import { CardCantener } from '../../CardContener/CardCantener'
import data from '../../../data';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../redux/thunk';



export const Home = () => {

  const {allSneakers} = data;
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  // console.log(state);

  useEffect (()=>{
    dispatch(fetchItems())
  },[])




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

