import React from 'react'
import "../Styles/Navbar1.css"
import {NavLink} from "react-router-dom"


const Navbar1 = () => {
  return (
    <div className="navbar1">
      <li>
        <NavLink to = "/About" className="navbar-left">
           ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to = "/Research" className="navbar-left">
            RESEARCH
        </NavLink>
      </li>
      <li>
        <NavLink to = "/Recruitment" className="navbar-left">
        RECRUITMENT
        </NavLink>
      </li>
      <li>
        <NavLink to = "/Docs" className="navbar-left">
       DOCS
        </NavLink>
      </li>
      <li>
        <NavLink to = "/Waitlist" className="navbar-left">
        WAITLIST
        </NavLink>
      </li>      
    </div>
  );
};

export default Navbar1
