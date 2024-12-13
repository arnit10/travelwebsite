import React from 'react'


const Card = (props) => {
  return (
    <div className='relative  border-2 overflow-hidden max-w-xs rounded-2xl shadow-lg group m-1'>
      <div >
        <img src={props.src} alt={props.alt} className='size-80 flex items-center p-2 transition-transform group-hover:scale-110 duration-200 '/>
      </div>
      <h2 className='font-bold text-xl px-2'>{props.title}</h2>
      
      <div className='flex items-center justify-between mx-1'>
        <button className='border-2 rounded-xl p-1.5  my-2 bg-black text-white font-bold'>See Itinerary</button>
        <span className='border-md rounded-xl bg-gray-400 p-2 mx-1 '>{props.price}</span>
      </div>
    </div>
  )
}

export default Card
