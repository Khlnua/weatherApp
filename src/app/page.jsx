"use client";
import React from "react";
import {
  SearchCity,
  MainDesign,
  WeatherOfDay,
  WeatherOfNight,
} from "@/components";

const page = () => {
  return (
    <div className="relative">
      <MainDesign />
      <SearchCity />
      <WeatherOfDay />
      <WeatherOfNight />
    </div>
  );
};

export default page;
