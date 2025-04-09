import axios from "axios";
import { useState, useEffect } from "react";

const weatherApiKey = process.env.WEATHERAPIKEY;

export const useWeather = () => {
  const [searchCity, setSearchCity] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const weatherOfCity = async () => {
      const data = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
      );
      console.log(data);
    };

    weatherOfCity;
  }, []);

  return {};
};
