"use client";
import React from "react";
import { useState, useEffect } from "react";
import { City } from "./components/City";
import { Heart, House, MapPin, Search, User } from "lucide-react";
import axios from "axios";

const page = () => {
  const [search, setSearch] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [weather, setWeather] = useState(null);

  const weatherApiKey = process.env.WEATHERAPIKEY;

  useEffect(() => {
    const weatherOfUb = async () => {
      const {data} = await axios("https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Ulaanbaatar,Mongolia");
      setWeather(weatherOfUb.data);
    };
    weatherOfUb()
  }, [])

  const handleSearch = async (event) => {
    setSearch(event.target.value);

      const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
      const data = response.data.data;

      const cities = data.flatMap(country => country.cities);
      const matches = cities.filter(city => city.toLowerCase().startsWith(value.toLowerCase()));
      
      setSuggest(matches);
  }

  const handleCitySelect = async (cityName) => {
    
      const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`);
      setWeather(weatherResponse.data);
      setSearch(cityName);
      setSuggest([]); 
    
  };

  return (
    <div className="relative">
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

        <div className="z-4 top-170 left-465 relative w-36 h-36 rounded-full bg-[#6E72C9]">
          <div
            className="absolute inset-0 rounded-full mix-blend-overlay opacity-35"
            style={{
              background: "radial-gradient(circle, white 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      <div
        className="absolute z-5 top-12 left-20 flex w-128 h-20 rounded-[48px] px-6 py-4 gap-4 items-center bg-white"
        style={{ boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.06)" }}
      >
        <Search className="w-12 h-12 text-black opacity-[0.5]" />
        <input
          type="search"
          value={search}
          placeholder="Search"
          onChange={handleSearch}
          className="font-bold text-[32px]  text-black opacity-[0.8] "
        />

        <ul>
        {suggest.map((city, index) => (
          <li key={index} onClick={() => handleCitySelect(city)}>
            {city}
          </li>
        ))}
        </ul>
      </div>

      <div className="w-102 h-205 absolute top-32 left-70 z-10 backdrop-blur-[12px] bg-white/35 flex flex-col justify-around rounded-[48px] items-center">
        <div className="flex mt-5 ">
          <div className="flex flex-col">
            <p className="text-[18px] font-medium text-[#9CA3AF]">
              April 8, 2025
            </p>
            <p className="text-[48px] font-extrabold text-[#111827]">
             {weather.location.name}
            </p>
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
          {weather.current.temp_c} °C
          </p>
          <p className="text-[24px] text-[#FF8E27] font-extrabold ">{weather.current.condition.text}</p>
        </div>

        <div className="flex w-80 justify-between mb-5 ">
          <House className="w-8 h-8 text-[#111827]" />
          <MapPin className="w-8 h-8 text-[#6B7280]" />
          <Heart className="w-8 h-8 text-[#6B7280]" />
          <User className="w-8 h-8 text-[#6B7280]" />
        </div>
      </div>

      <div className="w-102 h-205 absolute top-32 left-385  z-10 backdrop-blur-[12px] bg-[#111827]/75 flex flex-col justify-around rounded-[48px] items-center">
        <div className="flex mt-5 ">
          <div className="flex flex-col">
            <p className="text-[18px] font-medium text-[#9CA3AF]">
              April 8, 2025
            </p>
            <p className="text-[48px] font-extrabold text-[#fff]">
              Ulaanbaatar
            </p>
          </div>
          <MapPin className="w-8 h-8 text-gray-500 my-5 mx-5" />
        </div>
        <div className="relative w-70 h-70">
          <img
            className="absolute z-10 w-70 h-70"
            src="/images/shadow2.png"
            alt=""
          />
          <img
            className="absolute z-20 w-65 h-65 "
            src="/images/night.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-[144px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[#111817]/0 bg-clip-text text-transparent">
            5.2°
          </p>
          <p className="text-[24px] text-[#777CCE] font-extrabold ">Clear</p>
        </div>

        <div className="flex w-80 justify-between mb-5 ">
          <House className="w-8 h-8 text-[#F9FAFB]" />
          <MapPin className="w-8 h-8 text-[#6B7280]" />
          <Heart className="w-8 h-8 text-[#6B7280]" />
          <User className="w-8 h-8 text-[#6B7280]" />
        </div>
      </div>
    </div>
  );
};

export default page;
