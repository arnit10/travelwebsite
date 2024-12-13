import React from 'react'
import BlogCard from './BlogCard'
import { blogData } from '../mockData/blogData'

const BlogCards = () => {
  return (
    <div className='flex flex-wrap justify-around pt-3'>
      {
        blogData.map((data)=>{
            return(
                <BlogCard key={data.id}
                src={data.src}
                alt={data.alt}
                title={data.title}
                name={data.name}
                date={data.date}/>
              )
          })
      }
    </div>
  )
}

export default BlogCards
