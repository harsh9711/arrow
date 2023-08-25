import React from 'react';
import "../Styles/Navbar1.css";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="navbar1">
      <li>
        <NavLink to="/About" className="navbar-left">
           ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to="/Research" className="navbar-left">
            RESEARCH
        </NavLink>
      </li>
      <li>
        <NavLink to="/Recruitment" className="navbar-left">
          RECRUITMENT
        </NavLink>
      </li>
      <li>
        <a href="https://docs.arrow.markets/arrow-markets/welcome/about-arrow-markets" target="_blank" rel="noopener noreferrer">DOCS</a>
      </li>
      <li>
        <NavLink to="/Waitlist" className="navbar-left">
          WAITLIST
        </NavLink>
      </li>
    </div>
  );
};

export default Navbar1;
