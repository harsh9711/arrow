import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation

import "../Styles/Navbar.css"
import imageSrc1 from "/Users/harshsahcdeva/Desktop/demo/project2/src/assets/hs.jpeg"
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu,CgClose} from "react-icons/cg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return(
    <div className={isMobile ? 'mobile-menu-open' : ''}>
      <nav className="header">
    
    <ul className={isMobile? "nav-links-mobile":"nav-links"}
    onClick={()=>setIsMobile(false)}>
    <li className="logo">
    <NavLink to = "/About">
        <img src={imageSrc1} />
        </NavLink>
    </li>  
      <li>
        <NavLink to = "/About" className="navbar-link">
           ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to = "/Research" className="navbar-link">
            RESEARCH
        </NavLink>
      </li>
      <li>
        <NavLink to = "/Recruitment" className="navbar-link">
        RECRUITMENT
        </NavLink>
      </li>
      <li>
        <a
    href="https://docs.arrow.markets/arrow-markets/welcome/about-arrow-markets"
    className="navbar-link"
    target="_blank" // Add target="_blank" to open in a new tab
    rel="noopener noreferrer" // Recommended for security
  >DOCS</a>
      </li> 
      <li>
      <NavLink
              to="/Waitlist"
              className="navbar-link"
              style={{ color: location.pathname === '/Waitlist' ? 'white' : 'rgb(78, 74, 255)' }}
            >        WAITLIST
        </NavLink>
      </li>
      <div className="buttons">
      <NavLink to = "/About">
        <button className="button2">INSTALL APP</button>
        </NavLink>
        <NavLink to = "/About">
     <button className="button1">LAUNCH BETA</button>
        </NavLink>
        </div>
      </ul>
        <button className="mobile-menu-icon"
            onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ? <CgClose className="closebar" /> : <CgMenu />}
        </button>
    {/* </div> */}
    </nav> 
    </div>
  );
};

export default Navbar;
