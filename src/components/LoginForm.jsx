import React from 'react'

const LoginForm = () => {
  return (
    <div className='p-4' >
      <form action="" className='flex flex-col gap-4' >
        <input className="border p-2" size="10" type="text" placeholder='email/username' />
        <input className="border p-2" type="text" placeholder='password' />
        <p className='text-sm '>Forgot Password</p>
        <button className='rounded-md bg-blue-300 text-lg font-semibold font-serif text-white p-2'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
