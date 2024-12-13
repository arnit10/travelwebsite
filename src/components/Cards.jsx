import React from 'react'
import { cardData } from '../mockData/cardData'
import { BiSolidPlaneAlt } from "react-icons/bi";
import {  Card } from '../components'

const Cards = () => {
  return (
    <>
    <p className='text-3xl text-center justify-center text-orange-400 py-4 underline font-bold font-serif'>Best Offers <BiSolidPlaneAlt className='inline text-blue-400 text-4xl '/></p>
      <div className='flex flex-row flex-wrap gap-2 items-center justify-center '>
        {
          cardData.map((data)=>{
            return(
            <Card key={data.id} 
            src = {data.src}
            alt = {data.alt}
            title = {data.title}
            about = {data.about}
            btnpage={data.btnPage}
            price = {data.price} />
            )
          })
        }
      </div>
      </>
  )
}

export default Cards
