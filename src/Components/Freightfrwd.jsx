import React from 'react'
import { motion } from 'framer-motion'
import truck from '../assets/truck.png'
import Button2 from './common/Button2'
import ship2 from '../assets/ship2.gif'
import InnerCard3 from './common/InnerCard3'

const Freightfrwd = () => {
  return (
    <div className='h-[500px] w-full flex justify-center gap-12 relative top-12 max-lg:left-[25px] max-lg:gap-8 max-md:gap-2 max-sm:justify-start max-sm:left-[140px]'>

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='w-[400px] relative'
      >
        {/* Truck Icon */}
        <div>
          <img src={truck} className='w-[55px]' alt='truck' />
        </div>

        {/* Title */}
        <div className='font-bold text-4xl w-28 max-sm:text-2xl max-sm:w-[225px]'>
          <p>Freight Forwarding</p>
        </div>

        {/* Description */}
        <div className='w-[320px] font-bold text-sm absolute top-[145px] leading-7 max-sm:top-[100px] max-sm:w-[300px]'>
          Red sky's freight forwarding team books, tracks and delivers end-to-end freight.
        </div>

        {/* Bullet List */}
        <div className='absolute top-[220px] leading-8 text-sm text-[#838383] max-sm:top-[160px]'>
          <ul className='list-[square] list-inside'>
            <li>Ocean Freight</li>
            <li>Road Freight</li>
            <li>Live In-transit temperature visibility</li>
            <li>Custom clearance</li>
          </ul>
        </div>

        {/* Button */}
        <div className='absolute top-[380px] max-sm:relative max-sm:top-[205px] max-sm:right-[135px]'>
          <Button2 name='LEARN MORE' />
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='hidden sm:block w-[400px] h-[300px] relative max-lg:w-[300px] max-md:w-[250px] max-md:h-[250px] max-md:right-[50px]'
      >
        <img src={ship2} className='object-cover w-full h-full rounded-2xl' alt='ship' />

        {/* Inner Card positioned bottom-right on top of GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className='absolute top-[290px] right-1 max-md:top-[250px]'
        >
          <InnerCard3 />
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Freightfrwd
