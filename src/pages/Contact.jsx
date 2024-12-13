import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'

const Contact = () => {
  return (
    <div className='flex flex-wrap justify-evenly gap-4 bg-zinc-100 py-10'>
      <ContactInfo/>
      <ContactForm/>
    </div>
  )
}

export default Contact
