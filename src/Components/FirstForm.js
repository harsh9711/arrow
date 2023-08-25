import React, { useState } from 'react';
import '../Styles/FormBox.css'; // Import your CSS file for styling

const FirstForm = ({ handleSignUpClick }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Process your form data or perform any necessary actions here.
      // For example, make an API request to sign up the user.
      // After successful signup, you can call handleSignUpClick to switch to the second form.
      // handleSignUpClick();
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
            <label htmlFor="name">Username</label>
            <input
               placeholder="Enter your username" 
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Wallet Address</label>
            <input
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Referral Code</label>
            <input
              type="text"
            />
          </div>
          <div className="bottompart">
          <p>Earn 500 points as the Referee! Paste referral code to claim.</p>
          <button type="submit">SIGN UP NOW</button>
          <div className="bottompart2">
          <h5>Already signed up?</h5>
          <h3 onClick={handleSignUpClick}>Sign in</h3>  </div>
          </div>
      </div>
    </div>
    // </div>
  );
};

export default FirstForm;
