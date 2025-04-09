import { MapPin, Search } from "lucide-react";
import { useCountries } from "@/hook/useCountries";
import { useState } from "react";

export const SearchCity = () => {
  const { countriesWithCities } = useCountries();
  const [inputValue, setInputValue] = useState("");
  const [foundCities, setFoundCities] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);

    const value = event.target.value.toLowerCase();

    const filteredCities = countriesWithCities
      .filter((city) => city.startsWith(value))
      .slice(0, 5);

    setFoundCities(filteredCities);
  };

  console.log(foundCities);

  return (
    <div
      className="absolute z-20  top-12 left-20 flex w-128 h-20 rounded-[48px] px-6 py-4 gap-4 items-center bg-white"
      style={{ boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.06)" }}
    >
      <Search className="w-12 h-12 text-black opacity-[0.5]" />

      <input
        type="search"
        value={inputValue}
        placeholder="Search"
        onChange={handleChange}
        className="font-bold text-[32px]  text-black opacity-[0.8] "
      />

      <ul className="flex absolute top-22 -left-0 w-128 flex-col py-4 items-start rounded-3xl bg-white/80 gap-1 ">
        {foundCities.map((city, index) => (
          <li
            className="flex h-14 px-6 gap-4 items-center text-black font-bold text-[24px]"
            key={index}
          >
            <MapPin />
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};
