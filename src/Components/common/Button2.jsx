import React from 'react'

const Button2 = ({ name }) => {
  return (
    <div>
      <button
        className="bg-[#211365] text-[#e9e7f0] w-38 h-8 rounded-full flex items-center justify-center
                   max-lg:w-[120px] max-lg:h-10
                   max-sm:w-[120px] max-sm:h-[30px] max-sm:rounded-full
                   max-sm:relative max-sm:left-[180px] max-sm:top-10"
      >
        <p className="text-sm max-lg:text-sm max-sm:text-xs">{name}</p>
      </button>
    </div>
  )
}

export default Button2
