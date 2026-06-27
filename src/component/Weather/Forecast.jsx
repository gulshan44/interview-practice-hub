import React from "react";

const Forecast = ({ forecast, convertTemp, unit }) => {
  if (!forecast.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">

      {forecast.map((item, index) => (
        <div
          key={index}
          className="bg-white/10 p-4 rounded-lg text-center"
        >
          <p>
            {new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
            className="mx-auto"
          />

          <p>{convertTemp(item.main.temp)}°{unit}</p>
        </div>
      ))}

    </div>
  );
};

export default Forecast;