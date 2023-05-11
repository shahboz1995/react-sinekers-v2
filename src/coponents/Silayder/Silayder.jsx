// import React from 'react'
import data from './data'
import React, { useState, useEffect } from "react";
import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';

// import silayder from "./silayder.png"
import adidas from "./adidas.png";

import './Silayder.css'

export const Silayder = () => {
  const [ sinkers, setSinkers] = useState(data);
  const [index,setIndex]=useState(0)

  useEffect(() => {
    const lastIndex = sinkers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (sinkers>lastIndex) {
      setIndex(0)
    }
  }, [index, sinkers]);


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > sinkers.length - 1) {
          index = 0
        }
        return index
      })
    }, 4000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = sinkers.length - 1
      }
      return index
    })
  }
  
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > sinkers.length - 1) {
        index = 0
      }
      return index
    })
  }

   
  return (    
    <div className='silayder'>
      <div className='stan'>
        <div className='stanAdidas'>
          <img className='adidas' src={adidas} alt="rasm"/>
        </div>
        <div className='forever'>
          <h6>
          <span>Stan Smith</span>,
          <br/>
          Forever!</h6>
        </div>
        <div className='silayderBtn'>
          <button>Купить</button>
        </div>

      </div>
      <div className='silayderImg' >
      {sinkers.map((sinekerImg, sinekerImgIndex)=>{
    const {id, image} = sinekerImg;

    let position = 'nextSlide'
    if (sinekerImgIndex === index) {
      position='activeSlide'
    }
    if (sinekerImgIndex === index - 1 || (index === 0 && sinekerImgIndex=== sinkers.length -1)) {
      position = 'lastSlide'
    }
    return(
        <article className={position} key={id}>
           <img  src={image} width="775" height="300" alt='rasm'/>          
        </article>
    )
  })}
      <button  className='prev'  onClick={prevSlide}>
      <FiChevronLeft />
      </button>
      <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      
      </div>

    </div>
  )
}


