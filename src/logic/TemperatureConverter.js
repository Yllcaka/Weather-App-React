const TemperatureConverter = (() => {
  const toCelsius = (temp) => {
    return parseInt(temp - 273.15);
  };
  const toFahrenheit = (temp) => {
    return parseInt((9 / 5) * toCelsius(temp) + 32);
  };
  return {
    toCelsius,
    toFahrenheit,
  };
})();
export { TemperatureConverter };
