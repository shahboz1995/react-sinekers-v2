import React, {useEffect} from 'react'
import { Wrapper,Header,Sorch, } from "../../index";
import { CardCantener } from '../../CardContener/CardCantener'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../redux/thunk';



export const Home = () => {

  const {allSneakers} = useSelector((state) => state);
  const dispatch = useDispatch()
  console.log(allSneakers);

  useEffect (()=>{
    dispatch(fetchItems("http://localhost:5000/allSneakers", `SAVE_ALL_SNEAKERS`))
  },[])




  return (
    <div className='homeCantener'>
      <Wrapper>
      <Header/>
      </Wrapper>
      <Wrapper>
      <Sorch/>
      <CardCantener items={allSneakers}/>
      </Wrapper>
      
    </div>
  )
}

