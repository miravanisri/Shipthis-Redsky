import React from 'react'

const Button = ({ name }) => {
  return (
    <button
      className="bg-[#211365] text-[#e9e7f0] w-28 h-10 rounded-full flex items-center justify-center
                 max-lg:w-20 max-lg:h-8
                 max-md:w-[60px] max-md:h-6"
    >
      <p className="text-sm max-md:text-xs">{name}</p>
    </button>
  )
}

export default Button
