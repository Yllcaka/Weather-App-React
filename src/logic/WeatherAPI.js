const WeatherAPI = async (location) => {
  let searchedLocation = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9cc089968480c855113db238d65c31fe`,
    {
      mode: "cors",
      redirect: "follow",
    }
  );

  let locationData = await searchedLocation.json();

  // if (!locationData.weather)
  //   return Promise.reject(`There isn't any info available for:
  //   "${location}"`);
  return locationData;
};

export { WeatherAPI };
