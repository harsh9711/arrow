// NormalNavbar.js
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../Styles/Navbar.css";
import imageSrc1 from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/assets/5.png";
import imageSrcMobile from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/assets/6.png";
import { CgMenu, CgClose } from "react-icons/cg";
import Diffpage from './Diffpage';
import Clicklogo from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/Components/Clicklogo.js";

const NormalNavbar = ({ handleLaunchBetaClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

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

  return (
    <div className={`mobile-menu-container ${isMobile ? 'menu-open' : ''}`}>
      <nav className="header">
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <NavLink to="/Clicklogo" className="navbar-link">
              <img src={isMobile ? imageSrcMobile : imageSrc1} className={isMobile ? "image2" : "image11"} alt="Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="navbar-link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/Research" className="navbar-link">
              RESEARCH
            </NavLink>
          </li>
          <li>
            <NavLink to="/Recruitment" className="navbar-link">
              RECRUITMENT
            </NavLink>
          </li>
          <li>
            <a
              href="https://docs.arrow.markets/arrow-markets/welcome/about-arrow-markets"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOCS
            </a>
          </li>
          <li>
            <NavLink
              to="/Waitlist"
              className="navbar-link"
              style={{ color: location.pathname === '/Waitlist' ? 'white' : 'rgb(78, 74, 255)' }}
            >
              WAITLIST
            </NavLink>
          </li>
          <div className="buttons">
            <NavLink to="/Vault">
              <button className="button2">INSTALL APP</button>
            </NavLink>
            <button className="button1" onClick={handleLaunchBetaClick}>
              LAUNCH BETA
            </button>
          </div>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <CgClose className="closebar" /> : <CgMenu />}
        </button>
      </nav>
    </div>
  );
};

export default NormalNavbar;
