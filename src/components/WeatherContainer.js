import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import WeatherForecast from "./WeatherForecast";
import { ReactComponent as WeatherGirl } from "../weatherGirl.svg";
import "../Animation.css";

const WeatherContainer = () => {
  const [location, setLocation] = useState({});
  return (
    <div className="weather-container">
      <SearchForm change={setLocation} />
      <div className="weather-forecast">
        <WeatherForecast weather={location} />
        <WeatherGirl style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export { WeatherContainer };
