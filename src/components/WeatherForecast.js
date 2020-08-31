import React, { useState } from "react";
import { TemperatureConverter } from "../logic/TemperatureConverter";
const WeatherForecast = (props) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleClick = () => {
    setIsCelsius(!isCelsius);
    // isCelsius = !isCelsius;
  };

  let celsius, fahrenheit, weatherData;

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
          <p>
            {temp}
            {isCelsius ? "°C" : "°F"}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="What's the weather like"
          />
          <p>{weatherData.description}</p>
          <button onClick={handleClick}>{isCelsius ? "°F" : "°C"}</button>
        </div>
      );
    } catch {
      return <div>aaaaa</div>;
    }
  } else {
    return <div>This place doesn't exist</div>;
  }
};

export default WeatherForecast;
