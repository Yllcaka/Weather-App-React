import React from "react";
import { WeatherContainer } from "./WeatherContainer";
import { NavBar } from "./NavBar";
import "../style.css";

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="main-app-container">
        <WeatherContainer />
      </div>
    </div>
  );
};

export { App };
