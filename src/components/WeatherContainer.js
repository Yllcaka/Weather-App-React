import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import WeatherForecast from "./WeatherForecast";
const WeatherContainer = () => {
  const [location, setLocation] = useState("BEfore");

  return (
    <div>
      <SearchForm change={setLocation} />
      <WeatherForecast weather={location} />
    </div>
  );
};

export { WeatherContainer };
