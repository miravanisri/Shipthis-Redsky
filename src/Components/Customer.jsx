import React from 'react'
import { motion } from 'framer-motion'
import Card2 from './common/Card2'
import Disney from '../assets/Disney.png'
import BBC from '../assets/BBC.webp'
import amazon from '../assets/amazon.png'

const Customer = () => {
  const options = [Disney, BBC, amazon]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  }

  return (
    <div
      className='h-[500px] relative flex flex-col items-center justify-center 
                 max-lg:h-auto max-lg:top-[50px] max-md:top-0 
                 max-sm:h-auto max-sm:px-4 max-sm:py-8 max-sm:-top-[120px]'
    >
      {/* --- Headline --- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-4xl font-bold w-[650px] leading-12 relative left-16 
                   max-lg:text-3xl max-md:text-2xl max-lg:left-0 
                   max-md:left-6 max-sm:text-lg max-sm:text-center 
                   max-sm:w-[200px] max-sm:leading-7'
      >
        Make <span className='text-orange-400'>quick, effective decisions</span>{' '}
        without impacting performance
      </motion.div>

      {/* --- Subheading --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-center font-bold relative top-12 text-xl 
                   max-lg:top-[20px] 
                   max-sm:text-sm max-sm:top-3 max-sm:left-7'
      >
        OUR CUSTOMERS
      </motion.div>

      {/* --- Customer Cards --- */}
      <div className='relative top-[140px] w-full flex justify-center 
                      max-lg:top-[65px] max-sm:top-10'>
        <div
          className='flex gap-3.5 max-lg:gap-8 max-lg:flex-wrap 
                     max-sm:flex-col max-sm:items-center max-sm:gap-6'
        >
          {options.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              initial='hidden'
              whileInView='visible'
              variants={cardVariants}
              viewport={{ once: true }}
              className='max-sm:w-48 max-sm:h-auto max-md:relative 
                         max-md:left-7  max-sm:top-3.5'
            >
              <Card2 img={value} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customer
