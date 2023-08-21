import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import "../Styles/Navbar.css"
import imageSrc1 from "/Users/harshsahcdeva/Desktop/demo/project2/src/assets/hs.jpeg"
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu,CgClose} from "react-icons/cg";

const Navbar = () =>
{  
  const[isMobile,setIsMobile]=useState(false);
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
    <div className="logo">
    <NavLink to = "/About">
        <img src={imageSrc1}/>
        </NavLink>
    </div>  
    <ul className={isMobile? "nav-links-mobile":"nav-links"}
    onClick={()=>setIsMobile(false)}>
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
        <NavLink to = "/Docs" className="navbar-link">
       DOCS
        </NavLink>
      </li> 
      <li>
        <NavLink to = "/Waitlist" className="navbar-link">
        WAITLIST
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
