import Link from 'next/link'
import React from 'react'
import { CommonBgType } from '../types/comonBgTypes'

const CommonBg = ({id, image, title, link}: CommonBgType) => {
  return (
    <div className="commonBg" id={id}>
      {image && <img src={image} alt={title}/>}
      <div className="bgFooter">
        <h2>{title}</h2>
        <Link href="">{link}</Link>
      </div>
    </div>
  )
}

export default CommonBg
