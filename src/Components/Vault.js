import React, { useState } from 'react';
import '../Styles/Vault.css';
import imagsrc1 from '/Users/harshsahcdeva/Documents/GitHub/arrow/src/assets/29.png';
import Vaults1 from  "./Vaults1.js";
import Positions from  "./Positions.js"; // Update the import path
import { BsQuestionCircle } from 'react-icons/bs';
import Card6 from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/Components/Card6.js";


const Vault = () => {
  const [isActive, setIsActive] = useState(true); // Initially set to true for "VAULTS" active state

  const toggleActive = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  return (
    <div className="container231">
      <div className="card-rowsecond1">
        <div className="cardinging1">
          <div className="image-box1">
            <img src={imagsrc1} alt="images" className="larger-image1" />
          </div>
          <div className="secondbox">
            <h2
              onClick={() => toggleActive()} // Add onClick event to toggle active state
              className={isActive ? "hover-underline-animation active" : "hover-underline-animation"}
            >
              VAULTS
            </h2>
            <h2
              onClick={() => toggleActive()} // Add onClick event to toggle active state
              className={!isActive ? "hover-underline-animation active" : "hover-underline-animation"}
            >
              POSITIONS
            </h2>
          </div>
          <div className="thirdbox">
            {isActive ? <Card6/> : <Positions />} {/* Render the component based on the active state */}
          </div>
        </div>
        <div className="carding1">
          <div className="content1">
            <h2>Options. Simplified.</h2>
            <p>Focus on your trades with the easiest way to trade options through our intuitive design. Enjoy simplified, faster, and more cost-effective trading with Arrow Markets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vault;
