import React from 'react'
import Redsky from '../assets/Redsky.png'
import linkedin from '../assets/linkedin.png'
import arc from '../assets/arc.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#110d3e] relative top-48 h-full'>

      {/* Arc Image on top of footer */}
      <div className='absolute -top-[119px] left-[450px] w-[350px] h-[350px] max-md:left-[170px] max-sm:left-[80px]'>
        <img src={arc} alt='arc' className='object-cover' />
      </div>

      <footer className='h-[450px] relative z-10'>
        {/* Logo */}
        <div className='relative top-20 left-[70px] max-sm:w-[100px] max-sm:h-[100px] max-sm:top-[52px]'>
          <img src={Redsky} alt='Redsky' />
        </div>

        {/* Footer Content */}
        <div className='flex gap-14 flex-wrap relative top-[120px] left-[50px] text-gray-200 max-sm:top-[10px]'>

          {/* United Kingdom */}
          <div className='text-sm max-sm:text-xs leading-8'>
            <p className='font-bold'>United Kingdom</p>
            <p className='font-light'>Address: The Bower, 207 Old Street, London, ECTV 9NR</p>
            <p className='font-light'>Phone: +55 658790</p>
            <p className='font-light'>Company Number: 1300876</p>
            <p className='font-light'>FCA Reference Number: 9976654</p>
          </div>

          {/* Germany */}
          <div className='text-sm leading-8 font-light'>
            <p className='font-bold'>Germany</p>
            <p>Address: Kollwitzstraße 89, 10356, Berlin</p>
            <p>Handelsregisternummer: 2345678</p>
          </div>

          {/* Links */}
          <div className='text-sm leading-8 font-light'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Imprint</p>
          </div>

          {/* Platform */}
          <div className='text-sm leading-8 font-light'>
            <p>Platform</p>
            <p>Finance</p>
            <p>Forwarding</p>
            <p>About Us</p>
          </div>

          {/* Social */}
          <div className='leading-8 font-light'>
            <p className='text-sm'>Connect with us</p>
            <div className='w-10 h-10 mt-2.5'>
              <img src={linkedin} alt='LinkedIn' className='object-cover w-full h-full' />
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
