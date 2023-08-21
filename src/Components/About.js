import React from 'react'
import "../Styles/About.css"
import {NavLink} from "react-router-dom"
import imageSrc from "../assets/1.png"
import Card from "/Users/harshsahcdeva/Desktop/demo/project2/src/Components/Card.js"
import Card2 from "/Users/harshsahcdeva/Desktop/demo/project2/src/Components/Card2.js"
const About = () => {
  return (
    <div className="page-container">
    <div className="About">
    <div className="heading">
      <h2>About us</h2>
      <p>Arrow Markets democratizes options market making.</p>
      <div className="image"><img src={imageSrc} alt="images"/> </div>
      </div>
  <div className="secondparagraph">
 <p><strong>Arrow Market</strong> is a decentralized options AMM on Avalanche. We implement a dynamic AMM that handles the creation and settlement of options on crypto-assets as well as the delta hedging of the pool. Arrow democratizes market making by allowing anybody to easily contribute liquidity to the protocol in addition to the conventional market makers in exchange for platform income.</p>
  </div>
  <div className="features">
    <h2>Features</h2>
<li>Cash-settled: A single numeraire is used to settle all contingent claims. This means underliers can be on-chain or off-chain.</li>
<li>Decentralized: Code is Law that replaces centralized settlement. Implemented through a network of DACs.</li>
<li>Fast and Secure: Runs on Avalanche virtual machines. Front runner resistant and blazing fast.</li>
<li>Prolific: Customize and combine options, call spreads, and put spreads.</li>
  </div>
  <div className="technology">
    <h2>The Technology Suite</h2>
<p>The Arrow protocol implements a decentralized aggregate counterparty (DAC) to act as both a settlement authority and a funding vehicle for each user-chosen reference asset. We call the DAC coupled with a contract factory a decentralized financial market (DFM). DFMs live on blockchains and generate economies of scale for contingent contract creation and settlement.</p>
<a href="https://docs.arrow.markets/arrow-markets/welcome/about-arrow-markets" target="_blank" rel="noopener noreferrer">
<button className="btn">LITEPAPER</button>
</a>
  </div>
<div className="paragraph">
<p>Research drives our design choices. Click  <NavLink to="/Users/harshsahcdeva/Desktop/demo/project2/src/Components/Research.js" className="navlink-active"><b>here</b></NavLink> to see a key set of papers that have helped shape our thinking.</p>
  </div>
  <div className="team">
    <h2>Our Team</h2>
<p>Arrow's co-founders are Economists from UCLA and Cornell who have built an incredible team of computer scientists, software developers and quantitative researchers to design, build and implement the Arrow options platform infrastructure..</p>
  </div>
  <div className="founders">
    <h2>Founders</h2>
    <Card/>
  </div>
  <div className="core">
    <h2>Core Team</h2>
    <Card2/>
  </div>
  <div className="Avalanche">
    <h2>Arrow is built on Avalanche</h2>
    <p> <NavLink to="https://www.avax.network/" className="navlink-active"><b>Avalanche</b></NavLink> is an advanced-generation blockchain optimized for financial transactions and runs the Ethereum Virtual Machine (EVM). Check out our talk to the Avalanche community.</p>
    <a href="https://www.youtube.com/watch?v=yyKrRGuMVX0&feature=youtu.be&ab_channel=Avalanche" target="_blank" rel="noopener noreferrer"/>
    <button className="btn">AVALANCHE TALK</button>
  </div>
    </div>
    </div>
  );
};

export default About;
