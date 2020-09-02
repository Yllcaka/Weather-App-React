import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm";
import WeatherForecast from "./WeatherForecast";
import { ReactComponent as WeatherGirl } from "../weatherGirl.svg";
import { SnowSpeed } from "../logic/SnowSpeed";
import "../Animation.css";

const WeatherContainer = () => {
  const [location, setLocation] = useState({});
  // useEffect(SnowSpeed.bind(), []);
  return (
    <div className="weather-container">
      <SearchForm change={setLocation} />
      <div className="weather-forecast">
        <WeatherForecast weather={location} />
        <WeatherGirl style={{ width: "100%" }} onClick={SnowSpeed.bind(this)} />
      </div>
    </div>
  );
};

export { WeatherContainer };
