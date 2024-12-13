import React from 'react'
import { FaPlaneDeparture,FaInstagram , FaFacebookF } from 'react-icons/fa6'
import { FaRegPaperPlane } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className=' '>
      <div className='flex flex-wrap justify-between p-3 mt-5 border-1  '>
        {/* Logo */}
        <div className="text-2xl flex gap-2 px-2 font-bold items-center">
            <FaPlaneDeparture/>
            <p>HS</p>
            <p className='text-orange-400 uppercase'>Travels</p>
          </div>
        {/* message box */}
        <div className=' border-2 ps-2 rounded-lg'>
            <input id='mail' className=' outline-none '  type="text" placeholder='Your email'/>
            <button className=' bg-orange-400 p-2 rounded-md '><FaRegPaperPlane/></button>
        </div>
      </div>
      <div className='flex justify-around p-3 border-t-2 border-y-2 '>
        <div>
            <h2 className='font-bold'>About</h2>
            <ul className='text-gray-500 font-semibold'>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
        <div>
            <h2 className='font-bold'>Category</h2>
            <ul className='text-gray-500 font-semibold'>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Partner with us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div>
            <h2 className='font-bold'>Support</h2>
            <ul className='text-gray-500 font-semibold'>
                <li><a href="#">Account</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Accessibility</a></li>
            </ul>
        </div>
        <div>
            <h2 className='font-bold'>Social Media</h2>
            <ul className=' flex flex-row text-xl text-center justify-evenly text-gray-500 font-semibold'>
                <li><a href="#"><FaInstagram/></a></li>
                <li><a href="#"><FaFacebookF/></a></li>
                <li><a href="#"><CiTwitter/></a></li>
                
            </ul>
        </div>
      </div>
      <div className='pl-2 py-2 font-semibold text-gray-700 text-center'>
        <p> &copy; 2024 HS Travel Copyright and All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer
