import React from 'react'

const BlogCard = (props) => {
  return (
    <div className='relative  border-2 overflow-hidden max-w-xs rounded-2xl shadow-lg group m-1'>
      <div >
        <img src={props.src} alt={props.alt} className='rounded size-80 flex items-center p-2 transition-transform group-hover:scale-110 duration-200 '/>
      </div>
      <h2 className='font-bold text-xl px-2'>{props.title}</h2>
      {/* <p>{props.about}</p> */}
      <div className='flex items-center justify-between mx-1'>
        
        <h5 className='border-2 rounded-xl p-1.5  my-2 bg-black text-white font-bold'>{props.name}</h5>
        <span className='border-md rounded-xl bg-gray-400 p-2 mx-1 '>{props.date}</span>
      </div>
    </div>
  )
}

export default BlogCard
