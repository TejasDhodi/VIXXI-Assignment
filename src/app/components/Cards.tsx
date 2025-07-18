import React from 'react'
import { CardType } from '../types/cardTypes'

const Cards = ({image1, image2, title, price, label}: CardType) => {
    
  return (
    <div className='card'>
      <div className="imageContainer">
        <img src={image1} alt="" width="231" height="300" className='first'/>
        <img src={image2} alt="" width="231" height="300" className='sec'/>
        {
          label && <label>{label}</label>
        }
      </div>
        <div className="cardBody">
            <p className="title">{title}</p>
            <p className="price">Rs.{price}</p>
        </div>
    </div>
  )
}

export default Cards
