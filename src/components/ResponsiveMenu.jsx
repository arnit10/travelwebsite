import React from 'react'
import {motion , AnimatePresence} from 'framer-motion'
import { NavbarMenu } from '../mockData/data'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({open}) => {
  return <AnimatePresence mode='wait'>
    {
        open && (
            <motion.div 
            initial={{opacity:0 , y:-100}}
            animate={{opacity:1 , y:0}}
            exit={{opacity:0 , y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full h-screen z-20  md:hidden overflow-hidden'>
                <div className='bg-black/70 rounded-xl p-4 font-bold text-white text-2xl uppercase m-4'>
                    <ul className='flex flex-col items-center justify-center gap-10' >
                        {
                            NavbarMenu.map((items) => {
                                return(
                                    <li 
                                    className='px-2 py-2 hover:font-semibold hover:text-yellow-600'
                                    key={items.id} ><Link onClick={()=>{setOpen('false')}} to={items.link}>{items.name}</Link></li>
                                    
                                )
                                
                            })
                            
                        }
                        <li className='px-2 py-2 hover:font-semibold hover:text-yellow-600'><Link onClick={()=>{setOpen('false')}} to={'/login'}>Login/Signup</Link></li>
                    </ul>
                </div>
            </motion.div>
        )
    }
    </AnimatePresence>
  
}

export default ResponsiveMenu
