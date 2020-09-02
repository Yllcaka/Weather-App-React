import React from "react";

import logo from "../images/Logo.svg";
import githubLogo from "../images/github-logo.svg";

const NavBar = () => {
  let gitHubLink = "https://github.com/Yllcaka/Weather-App-React";
  return (
    <nav className="main-nav">
      <li>
        <img src={logo} />
      </li>
      <li>
        <a href={gitHubLink} target="blank">
          <img src={githubLogo} />
        </a>
      </li>
    </nav>
  );
};

export { NavBar };
