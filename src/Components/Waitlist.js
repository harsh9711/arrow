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

  // const [buttonClicked, setButtonClicked] = useState(false);
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // const handleSignUpClick = () => {
  //   if (activeForm === 'first') {
  //     setActiveForm('second');
  //   } else {
  //     setActiveForm('first');
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setButtonClicked(true);
  // };

  return (
    <div className="whole">
    <div className="container11">
    {activeForm === 'first' ? (
        <FirstForm handleSignUpClick={handleSignUpClick} />
      ) : (
        <SecondForm setActiveForm={setActiveForm} />
      )}
    <div className="image1">
      <div className="big1">
      <CgPokemon className="big1img"/>
        <h2>Giveaways</h2> 
        <p>Check out Arrow's Galxe campaign for exciting rewards!</p>
      </div>
      <div className="flexing">
      <div className="small1">
      <BsUniversalAccessCircle className="big2img"/>
        <h2>Early access to V2</h2>
      </div>
      <div className="small1">
      <BsCardChecklist className="big2img"/>
        <h2>Early access to V2</h2>
      </div>
      </div>
      <div className="flexing1">
      <div className="small1">
      <FaDiscord className="big2img"/>
        <h2>Early access to V2</h2>
      </div>
      <div className="small1">
      <RiNftLine className="big2img"/>
        <h2>Early access to V2</h2>   
      </div>
      </div>
    </div>
    </div>
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
