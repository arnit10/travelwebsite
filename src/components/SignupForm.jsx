import React from 'react'

const SignupForm = () => {
  return (
    <div className='p-3 pb-3' >
      <form action="" className='flex flex-col gap-2 md:gap-4 ' >
        <div className='flex flex-col gap-2 md:gap-8 md:flex-row '>
        <input className="border p-2" size="25" type="text" placeholder='first name' />
        <input className="border p-2" size="25" type="text" placeholder='last name' />
        </div>
        <input className="border p-2" size="10" type="text" placeholder='date of birth' />
        <input className="border p-2" size="10" type="text" placeholder='phone number' />
        <input className="border p-2" size="10" type="text" placeholder='email' />
        <input className="border p-2" type="text" placeholder='password' />
        <button className='rounded-md bg-blue-300 text-lg font-semibold font-serif text-white p-2'>Sign Up</button>
      </form>
    </div>
    
  )
}

export default SignupForm
