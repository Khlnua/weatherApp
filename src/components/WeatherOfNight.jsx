import { Heart, House, MapPin, User } from "lucide-react";

export const WeatherOfNight = ({ weather, loading }) => {
  return (
    <div className="absolute -left-95 top-0 ">
      {loading ? (
        <div className="border-4 rounded-full animate-spin "> </div>
      ) : (
        <div className="w-102 h-205 absolute top-32 left-330  z-10 backdrop-blur-[12px] bg-[#111827]/35 flex flex-col justify-around rounded-[48px] items-center">
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
              src="https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fmoon.png&w=640&q=75"
              alt=""
            />
          </div>

          <div className="pb-20">
            <p className="text-[110px] font-bold bg-gradient-to-b from-[#F9FAFB] to-[#111817]/0 bg-clip-text text-transparent">
              {weather.forecast?.forecastday[0].day.mintemp_c}°C
            </p>

            <p className="text-[24px] text-[#777CCE] pl-5 font-extrabold ">
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
      )}
    </div>
  );
};
