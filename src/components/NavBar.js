import React, { useEffect } from "react";

import { ReactComponent as Logo } from "../images/Logo.svg";

import githubLogo from "../images/github-logo.svg";
import { SnowSpeed } from "../logic/SnowSpeed";
import "../Animation.css";
const NavBar = () => {
  let gitHubLink = "https://github.com/Yllcaka/Weather-App-React";
  useEffect(SnowSpeed, []);
  return (
    <nav className="main-nav">
      <li className="logo">
        <Logo />
      </li>
      <li>
        <h1 className="app-title">WEATHER APP</h1>
      </li>
      <li className="github-logo">
        <a href={gitHubLink} target="blank">
          <img src={githubLogo} alt="source-code" className="github-logo" />
        </a>
      </li>
    </nav>
  );
};

export { NavBar };
