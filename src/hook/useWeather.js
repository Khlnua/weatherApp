import axios from "axios";
import { useState, useEffect } from "react";

export const useWeather = () => {
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const weatherApiKey = process.env.WEATHERAPIKEY;
    setLoading(true);

    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
        );

        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeatherData();
    setLoading(false);
  }, [selectedCity]);

  console.log(weather, "weather");

  console.log(loading, "loading");

  return {
    weather,
    setSelectedCity,
    loading,
  };
};
