import React,{useState} from 'react'
import "../Styles/Reasearch.css"
import {NavLink} from "react-router-dom"
import List from "./Asset.js"
import imageSrc from "../assets/3.png"
import {BsTelegram} from 'react-icons/bs';
import {AiOutlineUp} from 'react-icons/ai';
import RiskMeasures from './RiskMeasures'
import ToggleSection from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/Components/ToggleSection.js"


const Research = () => {
    const [assetStatus, setAssetStatus] = useState(true);
    const [riskStatus, setRiskStatus] = useState(true);
  
    const toggleAssetStatus = () => {
      setAssetStatus(!assetStatus);
    };
  
    const toggleRiskStatus = () => {
      setRiskStatus(!riskStatus);
    }; 
     return (
    <div className="page-container">
    <div className="About">
    <div className="heading">
      <h2>Research-</h2>
      <p>It drives our design. Below we link to some key papers that have helped shape our thinking.</p>
      <div className="image"><img src={imageSrc} alt="images"/> </div>
      </div>
      <div className="listing">
      <ToggleSection />
        </div>
    </div>
    </div>
  );
};

export default Research;