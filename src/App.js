import React,{useState} from 'react'
import Navbar from './Components/Navbar.js'
import Waitlist from './Components/Waitlist.js'
import About from './Components/About.js'
import Docs from './Components/Docs.js'
import Research from './Components/Research.js'
import SingleProduct from './Components/SingleProduct.js'; 
import Recruitment from './Components/Recruitment.js'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Errorpage from "./Components/Errorpage.js";
import "./App.css";
import Footer from "./Components/Footer.js";

const App = () => {
  return (
    <>
       <Router>
       <Navbar/>
        <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/About" element={<About/>}/>
          <Route path="/Research" element={<Research/>}  />
          <Route path="/Recruitment" element={<Recruitment/>}/>
          <Route path="/Docs" element={<Docs/>}/>
          <Route path ="/singleProduct/:id" element={<SingleProduct/>}/>
          <Route path="/Waitlist" element={<Waitlist/>}/>
          <Route path ="*" element={<Errorpage/>}/>
        </Routes> 
        <Footer/>    
      </Router>
    </>
  )
}

export default App
