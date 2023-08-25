import React, { useState } from 'react';
import '../Styles/FormBox.css'; // Import your CSS file for styling
const SecondForm = ({ setActiveForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process your second form data or perform any necessary actions here.
    // For example, make an API request to sign in the user.
    // After successful sign-in, you can navigate to another page or perform other actions.
  };

  return (
    // <div className="container11">
      <div className="form-box">
        <div className="headings">
          <h2>Sign up for early v2 access</h2>
          <p>1.5M people already signed up</p>
        </div>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="email">Wallet Address</label>
            <input type="text" />
          </div>
          <div className="bottompart">
            <button type="submit">SIGN IN</button>
            <div className="bottompart2">
              <h5> You have Already signed up?</h5>
              <h3 onClick={() => setActiveForm('first')}>Sign up</h3>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default SecondForm;
