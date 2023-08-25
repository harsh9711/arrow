import React, { useState } from 'react';
import data from '/Users/harshsahcdeva/Desktop/demo/project2/src/data/data3.json';
import '../Styles/toggle.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

function ToggleSection() {
  const [categoryVisibility, setCategoryVisibility] = useState(
    data.Research.map(() => false)
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
              className="toggle-button"
              onClick={() => toggleCategoryVisibility(index)}
            >
              <span className="toggle-icon">
                {categoryVisibility[index] ? (
                  <AiOutlineUp /> // Change the icon to AiOutlineUp when content is visible
                ) : (
                  <AiOutlineDown /> // Use AiOutlineDown when content is not visible
                )}
              </span>
            </button>
          </div>
          {categoryVisibility[index] && (
            <ul>
              {category[Object.keys(category)[0]].map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
          <hr className="heading-line" />
        </div>
      ))}
    </div>
  );
}

export default ToggleSection;
