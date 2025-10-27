import React from 'react'

const Card2 = ({ img }) => {
  return (
    <div className="w-[310px] h-[250px] bg-[#f9f2ed] rounded-2xl relative 
                    max-md:w-[280px]">
      
      {/* Upward-facing semi-arc on top border */}
      <div className="absolute -top-9 left-[110px] w-[100px] h-[100px] rounded-full bg-[#f9f2ed] 
                      max-md:-top-8 max-md:left-[100px]" />
      
      {/* Inner circle with image */}
      <div className="absolute -top-[25px] left-[118px] w-[85px] h-[85px] rounded-full bg-white 
                      flex items-center justify-center overflow-hidden 
                      max-md:left-[108px]">
        <img src={img} alt="customer logo" className="object-contain w-full h-full" />
      </div>

      {/* Description */}
      <div className="text-sm leading-7 relative left-[30px] top-[65px] w-[270px] 
                      max-md:text-xs max-md:left-[5px]">
        Red Sky's freight forward team books, tracks and delivers end-to-end freight.
      </div>

      {/* Author / Reference */}
      <div className="text-sm leading-7 relative left-[5px] top-[130px] w-[270px] 
                      max-md:text-xs">
        Martha Bishop, Supply Manager Disney
      </div>
    </div>
  )
}

export default Card2
