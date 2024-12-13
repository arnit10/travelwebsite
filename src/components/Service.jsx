import React from 'react'

const Service = () => {
  return (
    <div className='p-3 '>
      <div >
        <h1 className='text-xl font-bold pb-4'>Discover Our Services</h1>
        <p className='text-gray-500'>At HS Travels, we offer a wide range of services to make your journey unforgettable. From planning the perfect itinerary to ensuring you travel stress-free, we have got you covered!
        </p>
      </div>
      <div>
        <h2 className='font-bold text-lg pt-2'>Our Top Services</h2>
        <h4 className='font-bold text-md py-3'>Customized Travel </h4>
        <p className='pl-2 text-gray-500'>Packages Tailor your dream vacation with our personalized travel packages. Whether you are planning a romantic getaway, a family adventure, or a solo trip, we design itineraries to suit your needs and budget.
        </p>
        <div>
        <ul className='pl-3 list-disc '>
          <li> Flexible dates and destinations</li>
          <li> Handpicked accommodations and activities</li>
          <li> 24/7 support during your trip</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Service
