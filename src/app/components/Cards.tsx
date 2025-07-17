import React from 'react'
import { CardType } from '../types/cardTypes'
import Image from 'next/image'

const Cards = ({image1, image2, title, price, label}: CardType) => {
    
  return (
    <div className='card'>
      <div className="imageContainer">
        <Image src="/images/rings.webp" alt={title} width={231} height={300}/>
        <label>{label}</label>
      </div>
        {/* <img src={image1} alt="" /> */}
        {/* <img src={image2} alt="" /> */}
        <div className="cardBody">
            <p className="title">{title}</p>
            <p className="price">Rs.{price}</p>
        </div>
    </div>
  )
}

export default Cards
