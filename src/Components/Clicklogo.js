import React, { useState, useEffect, useRef} from 'react';
import imageSrc from "../assets/7.png";
import "../Styles/Clicklogo.css";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { TbBeta } from "react-icons/tb";
import { TbCircleTriangle } from "react-icons/tb";
import {SlDiamond} from "react-icons/sl";
import {AiOutlinePaperClip} from "react-icons/ai";
import {PiCubeFocusLight} from "react-icons/pi";
import {Tb3DCubeSphere} from "react-icons/tb";
import {SiRoundcube} from "react-icons/si";
import {FaDashcube} from "react-icons/fa";
import imageSrc1 from "../assets/9.png"
// import imgSrc3 from "../assets/13.png"
import imgSrc4 from "../assets/14.png"
import imgSrc5 from "../assets/15.png"
import imgSrc6 from "../assets/16.png"
import imgSrc7 from "../assets/17.png"
import imgSrc8 from "../assets/18.png"
import imgSrc9 from "../assets/19.png"
import imgSrc10 from "../assets/20.png"
import imgSrc12 from "../assets/21.png"
import imgSrc11 from "../assets/22.png"
import imageSrc2 from "../assets/12.png"
import imageSrc13 from "../assets/26.png"
import imageSrc23 from "../assets/27.png"
import imageSrc24 from "../assets/28.png"
import Maincard from './Maincard';

const Clicklogo = () => {
  useEffect(() => {
    function handleScroll() {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 270;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container231">
      <div className="container1">
        <div className="heading1">
          <h1>The next generation of options markets</h1>
          <p>Arrow Markets is a cutting-edge options platform that revolutionizes trading by seamlessly integrating an innovative RFQ system.</p>
        </div>
        <div className="heading1image"><img src={imageSrc} alt="images" /></div>
      </div>
      <div className="rowing">
        <button className="btn">LAUNCH BETA</button>
        <div className="sidebuttons">
          <h2>SUPPORTED CHAINS</h2>
          <div className="icon-container">
            <div className="circle-icon">
              <PiDiamondsFourDuotone className="icon" />
            </div>
            <div className="circle-icon">
              <TbBeta className="icon" />
            </div>
            <div className="circle-icon">
              <TbCircleTriangle className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="cards123">
        <Maincard />
      </div>
      <section>
        <div className="container reveal fade-bottom">
      <div className="heading123">
          <h1>Enhanced Trading</h1>
          <h3>Experience</h3>
          <h2>Introducing V2</h2>
        </div>
        </div>
      </section>
      <section>
      <div className="container reveal fade-bottom">
      <div className="card-row">
        <div className="card">
        <SlDiamond className="icons"/>
        <div className="contain">
          <h2>Full Suite of Options</h2>
          <p>Request for Quotes (RFQs) allow for competitive price discovery for options contracts across strikes and expiration</p>
          </div>
        </div>
        <div className="card"> 
        <AiOutlinePaperClip className="icons"/>
        <div className="contain">
          <h2>Intuitive Trading Experience</h2>
          <p>Arrow's recommendation engine offers the perfect option on the Lite mode, while the Pro mode is ideal for experienced traders.</p>
        </div>
        </div>
        <div className="card">
        <PiCubeFocusLight className="icons"/>
        <div className="contain">
          <h2>Front-running Resistant</h2>
          <p>Request for Quotes (RFQs) offer fast price quotes that are protected against front-running.</p>
      </div>
        </div>
    
      </div>
      <div className="card-rowsecond">
            <div className="carding">
              <div className="content">
                <h2>Options. Simplified.</h2>
                <p>Focus on your trades with the easiest way to trade options through our intuitive design. Enjoy simplified, faster, and more cost-effective trading with Arrow Markets.</p>
                <button className="btn12">TRY V2</button>
              </div>
            </div>
            <div className="cardinging">
            <div className="image-box">
    <img src={imageSrc1} alt="images" className="larger-image" />
  </div>
            </div>
          </div>
          <div className="container reveal fade-bottom">
          <div className="badewaleimage">
          <img src={imageSrc2} alt="images" className="larger-image" />
          </div>
          <div className="paragraph">
            <h1>GOVs are LIVE on Mainnet</h1>
            <h1>Unlock the power of your assets with our vaults.</h1>
            <h1>Conveniently deposit ETH or BTC</h1>  
            <h1>to earn yield.</h1>
            <button className="btning">DEPOSIT NOW</button>
          </div>
          <div className="container reveal fade-bottom">
          <div className="card-row">
        <div className="card">
        <Tb3DCubeSphere className="icons"/>
        <div className="contain">
          <h2>Credit Spread Option Vaults</h2>
          <p>Our option recommender system picks the best option for users looking for a simplified options trading experience</p>
          </div>
        </div>
        <div className="card"> 
        <SiRoundcube className="icons"/>
        <div className="contain">
          <h1>Iron Condor</h1>
          <p>Clearly visualize your Profit or Loss on your Vault Deposits or Option Purchases by using the simulator.</p>
        </div>
        </div>
        <div className="card">
        <FaDashcube className="icons"/>
        <div className="contain">
          <h2>Generalized Option Vaults</h2>
          <p>Put CSOVs, Iron Condors, and Butterfly Spreads are going to come soon..</p>
      </div>
        </div>
    
      </div>
      </div>
      <div className="container reveal fade-bottom">
      <div className="investors">
        <h1>Investors</h1>
        <section>
        <div className="iconsing center-text ">
        <a href="http://cmsholdings.io/" target="_blank" rel="noreferrer">
        <img src={imgSrc4} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>CMS Holdings</h1>
      </a>
      <a href="https://coinlist.com" target="_blank" rel="noreferrer">
        <img src={imgSrc5} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>CoinList</h1>
      </a>
      <a href="https://crypto.com" target="_blank" rel="noreferrer">
        <img src={imgSrc6} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>Crypto.com</h1>
      </a>
      <a href="https://delphiventures.io/" target="_blank" rel="noreferrer">
        <img src={imgSrc7} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>Delphi Digital</h1>
      </a>
      <a href="https://www.finality.capital/" target="_blank" rel="noreferrer">
        <img src={imgSrc8} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>Finality</h1>
      </a>
      <a href="https://www.ledgerprime.com/" target="_blank" rel="noreferrer">
        <img src={imgSrc9} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>Ledger Prime</h1>
      </a>
      <a href="https://qcp.capital/" target="_blank" rel="noreferrer">
        <img src={imgSrc10} alt="Coding Beauty logo" className="iconsface"></img>
         <h1>QCP Capital</h1>
      </a>
      <a href="https://traderjoexyz.com/homenp" target="_blank" rel="noreferrer">
        <img src={imgSrc11} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>Trader Joe</h1>
      </a>
      <a href="https://www.rengen.io/" target="_blank" rel="noreferrer">
        <img src={imageSrc23} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>Addidas</h1>
        </a>
      <a href="https://www.rengen.io/" target="_blank" rel="noreferrer">
        <img src={imgSrc12} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>RenGen</h1>
        </a>
          <a href="https://www.rengen.io/" target="_blank" rel="noreferrer">
        <img src={imageSrc24} alt="Coding Beauty logo" className="iconsface"></img>
        <h1>G2 core</h1>
        </a>   
        </div>
        </section>
        </div>
      </div>
      </div>
          </div>
     
      </section>
    </div>
  );
};

export default Clicklogo;
