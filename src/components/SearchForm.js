import React, { useState, useEffect } from "react";
import { HandleFormData } from "../logic/FormData";
const SearchForm = (props) => {
  const [locationWeather, setLocationWeather] = useState("");
  const handleSubmit = async (e) => {
    //Here you get the input from the user and use it to
    //get the data from the Weather API and store it in the state
    e.preventDefault();
    let location = await HandleFormData(e.target);
    setLocationWeather(location);
  };
  useEffect(() => {
    //To change the visual component on each location change
    props.change(locationWeather);
  }, [locationWeather, props]);
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input name="location" placeholder="Search..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export { SearchForm };
