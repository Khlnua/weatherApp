import axios from "axios";
import { useState, useEffect } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get(
        `https://countriesnow.space/api/v0.1/countries`
      );

      setCountries(data.data);
    };

    getCountries();
  }, []);

  const countriesWithCities = countries
    .reduce((acc, { country, cities }) => {
      const countryWithCity = cities.map((city) =>
        `${city}, ${country}`.toLowerCase()
      );

      acc.push(countryWithCity);

      return acc;
    }, [])
    .flat();

  return { countriesWithCities };
};
