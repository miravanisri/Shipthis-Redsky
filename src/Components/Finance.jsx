import React from 'react'
import { motion } from 'framer-motion'
import container from '../assets/container.webp'
import tick from '../assets/tick.png'
import Button2 from './common/Button2'
import InnerCard2 from './common/InnerCard2'

const Finance = () => {
  return (
    <div className='h-[500px] w-full flex justify-center gap-14 relative top-12 
                    max-sm:flex-col max-sm:items-center max-sm:justify-start 
                    max-lg:left-9 max-sm:left-0 max-sm:top-0'>

      {/* --- Left Image with InnerCard2 --- */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='w-[500px] h-[350px] relative 
                   max-lg:w-[400px] max-lg:h-[350px]
                   max-sm:w-[250px] max-sm:h-[150px]'
      >
        <img
          src={container}
          alt='container'
          className='object-cover w-full h-full rounded-2xl'
        />
        <div className='absolute left-[130px] top-[300px] 
                        max-md:left-[50px] 
                        max-sm:top-[140px] max-sm:left-[80px]'>
          <InnerCard2 />
        </div>
      </motion.div>

      {/* --- Right Content Block --- */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='w-[400px] relative 
                   max-md:right-4 
                   max-sm:flex max-sm:flex-col max-sm:items-center max-sm:left-0'
      >
        {/* Icon & Heading */}
        <div className='hidden sm:block'>
          <img src={tick} alt='tick' />
        </div>

        <div className='hidden sm:block sm:font-bold sm:text-4xl'>
          Trade Finance
        </div>

        {/* Description */}
        <div className='w-[320px] font-bold text-sm absolute top-[100px] leading-6 
                        max-md:w-[250px] 
                        max-sm:top-[60px] max-sm:w-[300px] max-sm:text-[14px] max-sm:leading-6'>
          Red Sky's trade finance unlocks working capital stuck in your supply chain, 
          whilst eliminating credit and FX risks.
        </div>

        {/* Features List */}
        <div className='absolute top-48 leading-8 text-sm text-[#838383] 
                        max-md:leading-7 max-md:text-xs max-md:top-[200px] 
                        max-sm:top-[140px] max-sm:left-[50px]'>
          <ul className='list-[square] list-inside'>
            <li>Suppliers receive 100% advance payments</li>
            <li>Buyers protect and extend payment terms</li>
            <li>$250,000 - $1,000,000 facility sizes</li>
            <li>Fast, flexible finance with minimal paperwork</li>
          </ul>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className='absolute top-[352px] 
                     max-sm:top-[220px] max-sm:right-[320px]'
        >
          <Button2 name='LEARN MORE' />
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Finance
