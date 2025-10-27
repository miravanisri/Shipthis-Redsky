import React from 'react'

const InnerCard2 = () => {
  return (
    <div className="w-[400px] h-[160px] bg-[#f9f2ed] relative rounded-2xl overflow-visible 
                    max-lg:w-[280px] max-md:w-[240px] max-lg:h-[130px] max-sm:h-[110px]">

      {/* Circle on left border */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 
                      w-[70px] h-[70px] rounded-full bg-[#f9f2ed]" />

      {/* Header Section */}
      <div className="relative top-5 left-16 max-sm:top-2">
        <div className="text-gray-700 text-sm">Finance</div>
        <div className="text-2xl font-bold max-lg:text-xl max-sm:text-base">
          Trade Finance
        </div>
      </div>

      {/* Details Section */}
      <div className="flex gap-8 relative top-[40px] left-[70px] 
                      max-lg:top-[30px] max-sm:top-[20px]">
        
        {/* Requested */}
        <div>
          <div className="text-[10px] text-gray-600 font-medium">REQUESTED</div>
          <div className="font-bold">70%</div>
        </div>

        {/* Released In */}
        <div>
          <div className="text-[10px] text-gray-600 font-medium">RELEASED IN</div>
          <div className="font-bold">2 days</div>
        </div>
      </div>
    </div>
  )
}

export default InnerCard2
