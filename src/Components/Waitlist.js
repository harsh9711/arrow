import React, { useState } from 'react';
import '../Styles/FormBox.css'; // Import your CSS file for styling
import {CgPokemon} from 'react-icons/cg';
import {BsUniversalAccessCircle} from 'react-icons/bs'
import {BsCardChecklist} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';
import {RiNftLine} from 'react-icons/ri';
import Card3 from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/Components/Card3.js"
import Card5 from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/Components/Card5.js"
import SecondForm from "./SecondForm.js"; 
import FirstForm from "./FirstForm.js"; 
import Maincard from './Maincard';
const FormBox = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // const [activeForm, setActiveForm] = useState('first'); // 'first' or 'second'

    const [activeForm, setActiveForm] = useState('first');
  
    const handleSignUpClick = () => {
      setActiveForm('second');
    };


  return (
    <div className="whole"> 
    <Maincard/>
    <div className="boosts">
      <h2>Boosts</h2>
      <div className="headingslines4">
      <hr className="heading-line4" />
      <hr className="heading-line4" />
      <hr className="heading-line4" />
      <hr className="heading-line4" />
      <hr className="heading-line4" />
      <hr className="heading-line4" />
      <hr className="heading-line4" />
      <hr className="heading-line4" />
      <hr className="heading-line4" />
    </div>
    <p>To climb up the waitlist rank, make sure to successfully complete all the milestones listed below.</p>
      <div className="cardstyle">
      </div>
      <Card3/>
     
    </div>
    <div className="boosts">
      <h2>Waitlist</h2>
      <div className="cardstyle">
      </div>
      <Card5/>
     
    </div>
    </div>
  );
};

export default FormBox;
