import React, { useState } from 'react';
import data from '/Users/harshsahcdeva/Desktop/demo/project2/src/data/data3.json';
import '../Styles/toggle2.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

function ToggleSection2() {
  const [categoryVisibility, setCategoryVisibility] = useState(
    data.Recruitment.map(() => false)
  );

  // Function to toggle the visibility of a specific category
  const toggleCategoryVisibility = (index) => {
    const updatedVisibility = [...categoryVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setCategoryVisibility(updatedVisibility);
  };

  return (
    <div>
      {data.Recruitment.map((category, index) => (
        <div key={index} className="category-container">
          <div className="category-header">
            <h2 className={Object.keys(category)[0] === Object.keys(data.Recruitment[index])[0] ? 'front-end-header' : ''}>
              {Object.keys(category)[0]}
            </h2>
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
            <div className="category-content">
              {category[Object.keys(category)[0]].map((item, itemIndex) => (
                <div key={itemIndex}>
                  {/* <h3>{Object.keys(category)[0]}</h3> */}
                  <p>{item["heading1"]}</p>
                  <div className="space"></div>
                  <p>{item["heading2"]}</p>
                  <div className="space"></div>
                  <p>{item["heading3"]}</p>
                  <div className="space"></div>
                  <h4>Responsibilities:</h4>
                  <ul>
                    {item["Responsibilities:"].map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                  {item["Requirements:"] && (
                    <>
                      <h4>Requirements:</h4>
                      <ul>
                        {item["Requirements:"].map((requirement, reqIndex) => (
                          <li key={reqIndex}>{requirement}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item["Nice to have:"] && (
                    <>
                      <h4>Nice to have:</h4>
                      <ul>
                        {item["Nice to have:"].map((niceToHave, niceIndex) => (
                          <li key={niceIndex}>{niceToHave}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          <hr className="heading-line" />
        </div>
      ))}
    </div>
  );
}

export default ToggleSection2;
