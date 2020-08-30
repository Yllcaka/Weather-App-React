import React, { useState } from "react";
import { HandleFormData } from "../logic/FormData";
const SearchForm = (props) => {
  const [locationWeather, setLocationWeather] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let location = await HandleFormData(e.target);
    setLocationWeather(location);
    props.change(locationWeather);
    console.log(location);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="location" placeholder="Search..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export { SearchForm };
