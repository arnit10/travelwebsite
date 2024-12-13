import {React,useState} from 'react'
import { NavbarMenu } from '../mockData/data'
import {ResponsiveMenu} from '../components'
import { FaPlaneDeparture } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link , useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [open , setOpen] = useState(false)
  const navigate = useNavigate()
 

  return (
    <>
      <nav className=' border-y-2 bg-white '>
        <div className="container flex justify-between  px-4 py-2 ">
          {/* Logo Section */}
          <div className="text-2xl flex gap-2 px-2 font-bold items-center cursor-pointer"
          onClick={()=> navigate('/')}>
            <FaPlaneDeparture/>
            <p>HS</p>
            <p className='text-orange-400 uppercase'>Travels</p>
          </div>
          {/* Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex gap-6 text-gray-600 font-bold text-xl' >
              {
              NavbarMenu.map((items) => {
                return(
                  <li className="hover:text-semibold hover:text-blue-500" key={items.id}>
                    <Link to={items.link}>{items.name}</Link>
                  </li>
                )
              })
              }
            </ul>
          </div>
          <div className='flex flex-row gap-1'>
            {/* Book trip button section */}
            <div>
            <button className='hidden rounded-2xl  bg-black py-2 px-4 text-white font-bold hover:font-semibold md:block  '>Book Trip</button>
            </div>
            {/* Login/Signup */}
            <div className='hidden md:block rounded-2xl p-1.5 bg-blue-500 text-white hover:bg-orange-400'>
              <Link to="/login">
              <button>Login / Signup</button>
              </Link>
            </div>

          </div>
          {/* Hamburger Menu for small devices */}
          <div className='md:hidden text-4xl' onClick={()=> setOpen(!open)}>
           <GiHamburgerMenu/> 
          </div>
          
        </div>
      </nav>

      

      
      {/* Sidebar Section for Mobile */}
      <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar
