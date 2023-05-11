import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { BsHeart } from 'react-icons/bs';
import './Card.css'

export const Card = ({ item }) => {
  const { id, imageUrl, price, title } = item
  const [isLiked, setLiked] = useState(false)
  const [plus, setPlus] = useState(true)
  const dispatch = useDispatch();
  
  
  const hanleLike = (item) => {
    // console.log(item)
    setLiked((prevValue) => !prevValue)
  }

  const onClickPlus = (item) => {
    // console.log(item)
    dispatch({ type: 'ADD_TO_FAVOURITE', payload: item });
    setPlus((prevValue) =>!prevValue)
  }

  return (
    <div className="cardMenyu">
      <div className="cardBox">
        <div className="card">
          <div className="cardHeader">
          <BsHeart
          className={isLiked ? 'red' : 'emptyHeart'}
          size={24}
          onClick={() => hanleLike(item)}
        />

            <img width={'100%'} src={imageUrl} alt="rasm" />
          </div>
          <p className="cardTitle">{title}</p>
          <div className="cardFooter">
            <div>
              <span className="tsena">Цена: </span> <br />
              <span className="summa">{price} руб.</span>
            </div>
            <div>
              <button
                className={!plus ? 'plusBtn' : "plusButton"}
                onClick={() =>onClickPlus(item)}
              >
                <img className="plus" src="/img/plus.svg" alt="rasm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
