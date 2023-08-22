import React, { useState } from 'react';
import jsonData from './data.json'; // Adjust the path to your JSON file

function ToggleSection() {
  const [isParagraphVisible, setParagraphVisible] = useState(true);

  const toggleParagraph = () => {
    setParagraphVisible(!isParagraphVisible);
  };

  const researchData = jsonData.Research;

  return (
    <div>
      <div>
        <h2>Research Data</h2>
        <button onClick={toggleParagraph}>
          {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
        </button>
      </div>
      {isParagraphVisible && (
        <ul>
          {researchData.map((researchCategory, index) => (
            <li key={index}>
              <h3>{Object.keys(researchCategory)[0]}</h3>
              <ul>
                {researchCategory[Object.keys(researchCategory)[0]].map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <div className='line'></div>
    </div>
  );
}

export default ToggleSection;
