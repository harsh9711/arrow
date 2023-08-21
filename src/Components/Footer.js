import React from 'react'
import "../Styles/Footer.css";
import {BsTelegram} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


const Footer = () => {
  return (
      <div className="footer-rectangle">
        <div className="footer-content">
          <h2>2023 © ARROW MARKETS</h2>
          <h5>THE NEXT GENERATION OF OPTIONS TRADING.</h5>
          <div className="icons-container">
      <a href="https://t.me/arrowmarkets"><BsTelegram className="icon"/></a>
      <a href="https://guild.xyz/arrow-markets"><AiFillInstagram className="icon"/></a>
      <a href="https://guild.xyz/arrow-markets"><AiFillLinkedin className="icon"/></a>        
        </div>
      </div>
    </div>
  )
}

export default Footer
