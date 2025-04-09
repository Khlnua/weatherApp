import axios from "axios";
import { useState, useEffect } from "react";

export const useWeather = () => {
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const weatherApiKey = "5e721b1f5f6d4b04ae923111250704";

    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
     );

     const data = await response.json();
        setWeather(data);
      }
      catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  
    fetchWeatherData();
} , []);

console.log(weather, "weather");

return {
    weather,
    setSelectedCity,
  };
};

