"use client";
import React from "react";
import { City } from "./components/City";
import { ChevronsLeftRight } from "lucide-react";

const page = () => {
  return (
    <div className="relative  w-400 h-300">
      <div className="z-1 absolute flex w-400 h-300 justify-center items-start items-center">
        <div className="w-200 h-300 shrink-0 bg-[#F3F4F6]  rounded-l-3xl"></div>
        <div className="w-200 h-300 shrink-0 bg-[#0F141E]  rounded-r-3xl"></div>
      </div>
      <div className="absolute z-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-35 h-35 shrink-0 bg-[#F3F4F6]">
        <ChevronsLeftRight />
      </div>
    </div>
  );
};

export default page;
