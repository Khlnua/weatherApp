import React from "react";
import { Heart, House, MapPin, Search, User } from "lucide-react";

export const WeatherOfDay = () => {
  return (
    <div className="w-102 h-205 absolute top-32 left-70 z-10 backdrop-blur-[12px] bg-white/35 flex flex-col justify-around rounded-[48px] items-center">
      <div className="flex mt-5 ">
        <div className="flex flex-col">
          <p className="text-[18px] font-medium text-[#9CA3AF]">
            April 9, 2025
          </p>
          <p className="text-[48px] font-extrabold text-[#111827]"> </p>
        </div>
        <MapPin className="w-8 h-8 text-gray-500 my-5 mx-5" />
      </div>

      <div className="relative w-70 h-70">
        <img
          className="w-70 h-70 absolute z-10"
          src="/images/shadow.png"
          alt=""
        />
        <img
          className="w-65 h-65 absolute z-20 "
          src="/images/day.png"
          alt=""
        />
      </div>

      <div>
        <p className="text-[144px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text text-transparent">
          25 °C
        </p>
        <p className="text-[24px] text-[#FF8E27] font-extrabold ">text</p>
      </div>

      <div className="flex w-80 justify-between mb-5 ">
        <House className="w-8 h-8 text-[#111827]" />
        <MapPin className="w-8 h-8 text-[#6B7280]" />
        <Heart className="w-8 h-8 text-[#6B7280]" />
        <User className="w-8 h-8 text-[#6B7280]" />
      </div>
    </div>
  );
};
