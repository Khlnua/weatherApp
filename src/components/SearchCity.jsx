import { MapPin, Search } from "lucide-react";
import { useCountries } from "@/hook/useCountries";
import { useState } from "react";

export const SearchCity = ({ setSelectedCity }) => {
  const { countriesWithCities } = useCountries();
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);

    const filteredCities = countriesWithCities
      .filter((city) => city.toLowerCase().startsWith(inputValue.toLowerCase()))
      .slice(0, 5);

    setCities(filteredCities);
  };

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
    setInputValue("");
  };

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

      {inputValue && Boolean(cities.length) && (
        <ul className="flex absolute top-22 -left-0 w-128 flex-col items-start rounded-3xl bg-white/80 gap-1 ">
          {cities.map((city, index) => (
            <li
              className="flex w-full h-14 px-6 gap-4 items-center text-black font-bold text-[24px] cursor-pointer hover:bg-slate-200 transition duration-300 rounded-sm"
              key={index}
              onClick={() => handleSelectCity(city)}
            >
              <MapPin />
              {city
                .split(", ")
                .map(
                  (splitted) =>
                    splitted.charAt(0).toUpperCase() + splitted.slice(1)
                )
                .join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
