import React from 'react'
import service from '../assets/service.png'
import Button2 from './common/Button2'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className="h-[500px] max-sm:h-[250px] max-sm:absolute max-sm:top-10">
      {/* --- SECTION: HEADER IMAGE & TITLE --- */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center relative"
      >
        <div className="max-md:w-20 max-md:h-20">
          <img src={service} alt="service" />
        </div>

        <div className="absolute top-16">
          OUR SERVICES
        </div>
      </motion.div>

      {/* --- SECTION: DESCRIPTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center relative"
      >
        <div className="text-4xl font-bold absolute top-9 max-sm:text-2xl">
          Control Tower Platform
        </div>

        <div
          className="w-[760px] relative top-24 text-center
                     max-lg:text-center 
                     max-md:text-base max-md:w-[400px]
                     max-sm:w-[400px] max-sm:text-lg max-sm:leading-7 
                     max-sm:mx-auto max-sm:text-center max-sm:top-[90px]"
        >
          Red Sky's software platform directly increases profitability by reducing detention & demurrage,
          <span className="block mt-2">
            automating data entry and improving communication across your global supply chain.
          </span>
        </div>
      </motion.div>

      {/* --- SECTION: BUTTON --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-center relative"
      >
        <div className="absolute top-[344px] max-md:top-[250px] max-sm:top-[100px] max-md:right-[150px] max-sm:right-[310px]">
          <Button2 name="Learn More" />
        </div>
      </motion.div>
    </div>
  )
}

export default Services
