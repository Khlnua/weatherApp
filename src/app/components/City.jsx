import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

export const City = () => {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("ulaanbaatar");
  const [weather, setWeather] = useState();

  useEffect(() => {
    const weatherApiKey = process.env.WEATHERAPIKEY;

    const response = async () => {
      const { data } = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
      );
      console.log(data);
    };

    response();
  }, [cityName]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  console.log({ input });

  return (
    <div className="flex">
      <Search />
      <input
        type="text"
        placeholder="text here..."
        onChange={handleChange}
        value={input}
      />
    </div>
  );
};
