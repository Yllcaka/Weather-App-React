import React, { useState } from "react";
import { TemperatureConverter } from "../logic/TemperatureConverter";
import { ReactComponent as NotFound } from "../images/notFound.svg";
import { ReactComponent as Searching } from "../images/searching.svg";
const WeatherForecast = (props) => {
  const [isCelsius, setIsCelsius] = useState(true);
  let celsius, fahrenheit, weatherData;
  const handleClick = () => {
    setIsCelsius(!isCelsius);
  };

  let temp = "";
  if (props.weather) {
    try {
      celsius = TemperatureConverter.toCelsius(props.weather.main.temp);
      fahrenheit = TemperatureConverter.toFahrenheit(props.weather.main.temp);
      temp = isCelsius ? celsius : fahrenheit;
      weatherData = props.weather.weather[0];
      return (
        <div>
          {console.log()}
          <h1>{props.weather.name}</h1>

          <div className="weather-stats">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="What's the weather like"
            />
            <p>
              {temp}
              {isCelsius ? "°C" : "°F"}
            </p>
          </div>

          <p>{weatherData.description}</p>
          <button className="temperature-switch" onClick={handleClick}>
            {isCelsius ? "°F" : "°C"}
          </button>
        </div>
      );
    } catch {
      return (
        <div style={{ width: "100%", display: "block" }}>
          <NotFound style={{ width: "100%", display: "block" }} />
        </div>
      );
    }
  } else {
    return <Searching />;
  }
};

export default WeatherForecast;
