// BetaNavbar.js
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../Styles/BetaNavbar.css";
import { CgMenu, CgClose } from "react-icons/cg";
import imageSrc12 from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/assets/5.png";
import imageSrcMobile from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/assets/6.png";
import { BiAlignRight } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";

const BetaNavbar = ({ handleBackToNormalClick }) => {
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
        <div className="leftalign">
        <li>
            <NavLink to="/Clicklogo" className="navbar-link" onClick={handleBackToNormalClick}>
              <img src={imageSrcMobile} className= "image11" alt="Logo" />
            </NavLink>
          </li>
      
          <li>
            <NavLink to="/Vault" className="navbar-link">
              VAULT
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" className="navbar-link">
              TRADING
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="navbar-link">
              PORTFOLIO
            </NavLink>
          </li>
          </div>
          <div className="rightalign">
          <div className="buttons">
            <button className="buttonsize" >
             CONNECT WALLET
            </button>
            <div className="circle-iconn">
            <AiOutlineBell className="icons" /></div>
            <div className="circle-iconn">
            <BiAlignRight className="icons" />
            </div>
          </div>
          </div>
        </ul>
        {/* <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <CgClose className="closebar" /> : <CgMenu />}
        </button> */}
      </nav>
    </div>
  );
};

export default BetaNavbar;
