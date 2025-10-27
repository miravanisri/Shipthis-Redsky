import React from 'react'
import Button from './common/Button'
import Button2 from './common/Button2'

const Card1 = () => {
  return (
    <div className='w-full h-full relative max-sm:h-[250px] max-sm:w-[800px] max-sm:bottom-[95px] max-sm:flex max-sm:flex-col max-sm:items-center'>
      
      {/* Heading */}
      <div className='absolute top-0'>
        <p className='text-3xl font-bold max-lg:text-xl max-sm:text-4xl max-sm:relative max-sm:w-[300px]'>
          Powering Your <span className='text-[#ff4f3c]'>Supply Chain</span>
        </p>
      </div>

      {/* Description */}
      <div className='absolute top-[85px] text-base max-lg:top-[65px] max-lg:w-64 max-lg:text-sm max-md:text-xs max-md:w-[226px] max-md:h-[80px] max-sm:w-[320px] max-sm:h-[200px] max-sm:top-[120px] max-sm:text-xl'>
        <p>
          Supply chain software, trade finance and freight forwarding services for agrifood supply chains.
        </p>
      </div>

      {/* Button */}
      <div className='absolute top-[180px] max-lg:top-[260px] max-sm:right-[400px]'>
        <Button2 name="CONTACT US" />
      </div>
      
    </div>
  )
}

export default Card1
