import React from "react";
import paintedShip from "../../assets/paintship.jpg";

const InnerCard = () => {
  return (
    <div className="w-[280px] h-[140px] bg-[#f9f2ed] relative rounded-2xl 
                    max-lg:w-[225px] max-lg:h-[135px]">
      
      {/* Outer arc (background circle) */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 
                      w-[70px] h-[70px] max-lg:w-[50px] max-lg:h-[50px] 
                      rounded-full bg-[#f9f2ed]" />

      {/* Inner circle image */}
      <div className="absolute -top-[24px] left-1/2 -translate-x-1/2 
                      w-[50px] h-[50px] max-lg:w-[40px] max-lg:h-[40px] 
                      rounded-full bg-white overflow-hidden 
                      flex justify-center items-center shadow-sm">
        <img
          src={paintedShip}
          alt="painted ship"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div>
        {/* Title */}
        <div className="text-base font-semibold relative top-9 left-3.5">
          Your Order
        </div>

        {/* Divider Line */}
        <div className="border-b border-gray-300 relative top-12" />

        {/* Order Details */}
        <div className="flex gap-5 relative top-16 left-7 
                        text-sm font-bold max-lg:top-[60px]">
          
          {/* Quantity */}
          <div>
            <div className="text-[10px]">Quantity</div>
            <div className="text-normal max-lg:text-[10px]">18,700 Kgs</div>
          </div>

          {/* Containers */}
          <div>
            <div className="text-[10px]">Containers</div>
            <div className="text-normal max-lg:text-[10px]">28</div>
          </div>

          {/* Arrival */}
          <div>
            <div className="text-[10px]">Arrival in</div>
            <div className="text-normal max-lg:text-[10px]">15 Days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerCard;
