import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex justify-center '>
        <div className='px-10 py-4  border rounded-xl  bg-white '>
        <h3 className='text-3xl font-semibold pb-4'>Send Message</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <div className='flex flex-col'>
            <label htmlFor="Name" id='Name'>Name: </label>
            <input className='outline-none border mb-2' type="text" />
            <label htmlFor="Email" id='Email'>Email address: </label>
            <input className='outline-none border mb-2' type="text" />
            <label htmlFor="Phone" id='Phone'>Phone Number: </label>
            <input className='outline-none border mb-2' type="text" />
            <label htmlFor="Subject" id='Subject'>Subject: </label>
            <input className='outline-none border mb-2' type="text" />
            <label htmlFor="Message" id='Message'>Message: </label>
            <input className='outline-none border h-20' type="text" />
        </div>
        <button className='border rounded-xl p-1.5 font-semibold bg-yellow-500 text-white mt-2'>Send Message</button>

        </div>
    </div>
  )
}

export default ContactForm
