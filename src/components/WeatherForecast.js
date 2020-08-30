import React from "react";

// const WeatherForecast = async (props) => {
//   const displayWeather = async () => {
//     const value = await props.weather;
//     const content = (
//       <div>
//         {/* <h1>{value.name}</h1> */}
//         {/* <p>{props.weather.main.temp}</p> */}
//       </div>
//     );
//     return content;
//   };
//   return displayWeather;
// };

// export default WeatherForecast;

const WeatherForecast = (props) => {
  return (
    <div>
      <h1>{props.weather.name}</h1>
      {/* <p>{props.weather.main.temp}</p> */}
    </div>
  );
};

export default WeatherForecast;
