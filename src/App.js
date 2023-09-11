import React from 'react';
import Navbar from './Components/Navbar.js';
import Waitlist from './Components/Waitlist.js';
import About from './Components/About.js';
import Docs from './Components/Docs.js';
import Research from './Components/Research.js';
import SingleProduct from './Components/SingleProduct.js';
import Diffpage from './Components/Diffpage.js';
import Vault from './Components/Vault.js';
import Portfolio from './Components/Portfolio.js';
import Trading from './Components/Trading.js';
import V2review from './Components/V2review.js';
import Recruitment from './Components/Recruitment.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Errorpage from './Components/Errorpage.js';
import './App.css';
import Clicklogo from '/Users/harshsahcdeva/Documents/GitHub/arrow/src/Components/Clicklogo.js';
import Footer from './Components/Footer.js';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const pathsToHideFooter = ['/Vault', '/Portfolio','/Trading','/V2review']; 
  const hideFooter = pathsToHideFooter.includes(location.pathname);


  return (
    <>
      {/* <Router> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Recruitment" element={<Recruitment />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
         
          <Route path="/Waitlist" element={<Waitlist />} />
        <Route path="/Diffpage" element={<Diffpage />} />        
          <Route path="*" element={<Errorpage />} />
          <Route path="/Clicklogo" element={<Clicklogo />} />
          <Route path="/Trading" element={<Trading />} />
             {/* <Route path="/V2review" element={<V2review />} /> */}
          <Route path="/Vault" element={<Vault />} />
          <Route path="/Portfolio" element={<Portfolio />}/>      
        </Routes>
        {!hideFooter && <Footer />}   

    </>
  );
};

export default App;
