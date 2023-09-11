// Navbar.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NormalNavbar from './NormalNavbar.js';
import BetaNavbar from './BetaNavbar.js';

const Navbar = () => {
  const [isBetaActive, setIsBetaActive] = useState(false);
  const location = useLocation();

  const handleLaunchBetaClick = () => {
    setIsBetaActive(true);
  };

  const handleBackToNormalClick = () => {
    setIsBetaActive(false);
  };

  return (
    <div className="navbar-container">
      {isBetaActive ? (
        <BetaNavbar handleBackToNormalClick={handleBackToNormalClick} />
      ) : (
        <NormalNavbar handleLaunchBetaClick={handleLaunchBetaClick} />
      )}
    </div>
  );
};

export default Navbar;
