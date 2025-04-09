import React from "react";

export const MainDesign = () => {
  return (
    <div className="w-screen h-screen">
      <div className=" z-1 absolute flex justify-center">
        <div className="w-[50vw] shrink-0 bg-[#F3F4F6] h-screen rounded-l-3xl"></div>
        <div className="w-[50vw] shrink-0 bg-[#0F141E] h-screen rounded-r-3xl"></div>
      </div>

      <div className="flex gap-2.5 justify-center items-center absolute z-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-35 h-35 shrink-0 bg-[#F3F4F6]">
        <img className="w-11 h-21 " src="/images/Group 4.svg" alt="" />
        <img className="w-11 h-21 " src="/images/Vector (3).png" alt="" />
      </div>

      <div className="absolute z-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-300 border-1 w-35 h-35 shrink-0 "></div>
      <div className="absolute z-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-300 border-1 shrink-0 w-85 h-85"></div>
      <div className="absolute z-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-300 border-1 shrink-0 w-135 h-135"></div>
      <div className="absolute z-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-300 border-1 shrink-0 w-235 h-235"></div>
      <div className="absolute z-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-300 border-1 shrink-0 w-335 h-335"></div>
      <div className="absolute z-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-300 border-1 shrink-0 w-435 h-435"></div>

      <div className="z-4 top-20 left-50 relative w-44 h-44 rounded-full bg-[#FF8E27]">
        <div
          className="absolute  inset-0 rounded-full mix-blend-overlay opacity-35"
          style={{
            background: "radial-gradient(circle, white 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="z-4 top-170 left-410 relative w-36 h-36 rounded-full bg-[#6E72C9]">
        <div
          className="absolute inset-0 rounded-full mix-blend-overlay opacity-35"
          style={{
            background: "radial-gradient(circle, white 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
};
