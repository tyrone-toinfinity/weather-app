import "./Navbar.css";
import React from "react";

export default function navbar() {
  return (
    <nav>
      <div className="inner">
        <ul className="navbar-container">
          <li>
            {" "}
            <a href="/">{<img src="weather-app-logo.webp" />}</a>
          </li>
          <li>
            {" "}
            <a href="/">Weather Channel App</a>
          </li>
          <li>
            {" "}
            <a href="/">help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
