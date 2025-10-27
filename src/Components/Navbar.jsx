import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import Button from './common/Button'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const options = ['PLATFORM', 'FINANCE', 'FORWARDING', 'ABOUT US', 'CONTACT US']
  const [click, setClick] = useState(false)

  return (
    <nav className="w-full flex items-center justify-around px-12 py-2 relative max-h-20">
      {/* --- LOGO --- */}
      <div className="h-30 w-30 max-md:h-20 max-md:w-20 max-sm:w-30 max-sm:h-30">
        <img src={logo} alt="Logo" className="object-contain h-full w-full" />
      </div>

      {/* --- MOBILE MENU ICON --- */}
      <div className="max-sm:block hidden cursor-pointer" onClick={() => setClick(true)}>
        <Menu strokeWidth={1} />
      </div>

      {/* --- MOBILE SIDEBAR MENU --- */}
      {click && (
        <>
          {/* Overlay (background blur effect) */}
          <div
            className="fixed inset-0 bg-opacity-40 z-40"
            onClick={() => setClick(false)}
          ></div>

          {/* Sidebar sliding in */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[70%] bg-white z-100 p-5 shadow-lg"
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-6 relative left-1">
              <h2 className="text-lg font-semibold relative left-5">Menu</h2>
              <X
                size={26}
                className="cursor-pointer relative -left-3.5"
                onClick={() => setClick(false)}
              />
            </div>

            {/* Sidebar Menu Items */}
            <ul className="space-y-5 text-[#3f3753] font-medium leading-12 relative left-6">
              <li className="hover:text-amber-600 cursor-pointer">LOGIN</li>
              {options.map((value, index) => (
                <li key={index} className="hover:text-amber-600 cursor-pointer">
                  {value}
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}

      {/* --- DESKTOP MENU OPTIONS --- */}
      <div className="flex gap-10 max-md:gap-6 text-sm font-medium text-[#3f3753] max-md:text-xs max-sm:hidden">
        {options.map((op, index) => (
          <a key={index} href="#" className="hover:text-amber-600 transition">
            {op}
          </a>
        ))}
      </div>

      {/* --- LOGIN BUTTON (DESKTOP) --- */}
      <div className="max-sm:hidden">
        <Button name="LOGIN" />
      </div>
    </nav>
  )
}

export default Navbar
