"use client";

import {
  SearchCity,
  MainDesign,
  WeatherOfDay,
  WeatherOfNight,
} from "@/components";
import { useWeather } from "@/hook/useWeather";

const page = () => {
  const { setSelectedCity, weather, loading } = useWeather();

  return (
    <div className="relative">
      <MainDesign />
      <SearchCity setSelectedCity={setSelectedCity} />
      <WeatherOfDay weather={weather} loading={loading} />
      <WeatherOfNight weather={weather} />
    </div>
  );
};

export default page;
