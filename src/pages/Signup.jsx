import React from 'react'
import SignupForm from '../components/SignupForm'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='bg-slate-200 h-screen flex flex-wrap items-center justify-center '>
          <div className='flex flex-row h-2/3 w-4/5 '>
            <div className="hidden md:flex justify-center items-center w-full  bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]  ">
              <h1 className='text-4xl font-serif font-bold text-white'>HS Travels</h1>
            </div>
            <div className='bg-white border-black rounded-md p-4 w-full '>
              <h1 className='text-2xl pl-4'>Login</h1>
              <SignupForm/>
              <div>
                <p className='text-lg'>Already a User ? <span className='text-blue-700'>
                <Link to="/login">Login</Link>
                  </span></p>
              </div>
            </div>
            
          </div>
        </div>
  )
}

export default Signup
