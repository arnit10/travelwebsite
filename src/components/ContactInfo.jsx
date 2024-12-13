import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className='flex flex-col p-2 gap-2 '>
      <h3 className='font-bold text-2xl pb-4'>Contact Info</h3>
      <div className='border rounded-md p-4 flex flex-row gap-5 bg-white'>
       <div className='rounded-full'> <IoCall /> </div>
        <div>
          <h3>Phone Number</h3>
          <p>+91 919191XXXX</p></div>
      </div>
      <div className='border rounded-md p-4 flex flex-row gap-5 bg-white'>
        <div><MdEmail/></div>
        <div>
          <h3>Email Address</h3>
          <p>abc@gmail.com</p></div>
      </div>
      <div className='border rounded-md p-4 flex flex-row gap-5 bg-white'>
        <div><FaFax/></div>
        <div>
          <h3>Fax Address</h3>
          <p>+91 9191XXXX91</p></div>
      </div>
      <div className='border rounded-md p-4 flex flex-row gap-5 bg-white'>
        <div><FaLocationDot/></div>
        <div>
          <h3>Location</h3>
          <p>H/no. XX , Noida , U.P</p></div>
      </div>
    </div>
  )
}

export default ContactInfo
