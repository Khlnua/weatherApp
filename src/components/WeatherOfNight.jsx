import { useWeather } from "@/hook/useWeather";
import { Heart, House, MapPin, User } from "lucide-react";

export const WeatherOfNight = () => {

  const { weather, setSelectedCity } = useWeather();
  const handleCityChange = (city) => {
    setSelectedCity(city)
  };
  
  return (
    <div className="w-102 h-205 absolute top-32 left-330  z-10 backdrop-blur-[12px] bg-[#111827]/75 flex flex-col justify-around rounded-[48px] items-center">
      <div className="flex mt-5 ">
        <div className="flex flex-col">

          <p className="text-[18px] font-medium text-[#9CA3AF]">
          {weather.forecast?.forecastday[0].date}
          </p>

          <p className="text-[48px] font-extrabold text-[#fff]">
            {weather.location?.name}
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
        {weather.forecast?.forecastday[0].day.mintemp_c} °C
        </p>

        <p className="text-[24px] text-[#777CCE] font-extrabold ">
        {weather.forecast?.forecastday[0].day.condition.text}
        </p>
      </div>

      <div className="flex w-80 justify-between mb-5 ">
        <House className="w-8 h-8 text-[#F9FAFB]" />
        <MapPin className="w-8 h-8 text-[#6B7280]" />
        <Heart className="w-8 h-8 text-[#6B7280]" />
        <User className="w-8 h-8 text-[#6B7280]" />
      </div>
    </div>
  );
};

