"use client";
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
