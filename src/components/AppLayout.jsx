import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Offer from './Offer'

const AppLayout = () => {
        
    return (
    <>
        <div>
        <Offer/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    </>
  )
}

export default AppLayout
