import React from 'react'

const InnerCard3 = () => {
  return (
    <div className="w-[280px] h-[160px] bg-[#f9f2ed] relative rounded-2xl">
      
      {/* Outer Circle */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[70px] h-[70px] rounded-full bg-[#f9f2ed]" />

      {/* Content Section */}
      <div className="relative top-9 left-7">
        
        {/* Header */}
        <div className="text-[10px] font-bold">
          TOTAL PRODUCTS
        </div>
        <div className="font-semibold">
          24,000 Kgs
        </div>

        {/* Status 1 */}
        <div className="flex gap-3 relative top-2.5">
          <div className="w-[20px] h-[20px] rounded-full bg-[#ff5c29]" />
          <div className="text-[12px]">Ready to ship</div>
        </div>

        {/* Status 2 */}
        <div className="flex gap-3 relative top-4">
          <div className="w-[20px] h-[20px] rounded-full bg-yellow-400" />
          <div className="text-[12px]">Yet to ripen</div>
        </div>
      </div>

      {/* Circular Progress Chart */}
      <div
        className="w-[80px] h-[80px] rounded-full absolute top-8 left-[190px]"
        style={{
          background: 'conic-gradient(#fbbf24 0% 60%, #f97316 60% 100%)',
        }}
      >
        <div className="w-[50px] h-[50px] rounded-full bg-[#f9f2ed] relative top-3.5 left-4 text-center text-sm font-bold">
          <div className="relative top-3">60%</div>
        </div>
      </div>

    </div>
  )
}

export default InnerCard3
