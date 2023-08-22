import React, { useState } from 'react';
import data from '/Users/harshsahcdeva/Desktop/demo/project2/src/data/data3.json';
import '../Styles/toggle.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';


function ToggleSection() {
  // Initialize visibility state for each category
  const [categoryVisibility, setCategoryVisibility] = useState(
    data.Research.map(() => true)
  );

  // Function to toggle the visibility of a specific category
  const toggleCategoryVisibility = (index) => {
    const updatedVisibility = [...categoryVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setCategoryVisibility(updatedVisibility);
  };

  return (
    <div>
      {data.Research.map((category, index) => (
        <div key={index} className="category-container">
          <div className="category-header">
            <h2>{Object.keys(category)[0]}</h2>
            <button
              className="toggle-button" // Apply the CSS class to the button
              onClick={() => toggleCategoryVisibility(index)}
            >
              {categoryVisibility[index] ? (
                <span className="toggle-icon">
                <AiOutlineUp/>
                </span>
              ) : (
                <span className="toggle-icon">
                <AiOutlineDown/></span>
              )}
            </button>
          </div>
          {categoryVisibility[index] && (
            <ul>
              {category[Object.keys(category)[0]].map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
          {/* <div className='line'></div> */}
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default ToggleSection;
