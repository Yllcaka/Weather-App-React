import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import WeatherForecast from "./WeatherForecast";

const WeatherContainer = () => {
  const [location, setLocation] = useState({});
  return (
    <div className="weather-container">
      <SearchForm change={setLocation} />
      <WeatherForecast key={location} weather={location} />
    </div>
  );
};

export { WeatherContainer };
