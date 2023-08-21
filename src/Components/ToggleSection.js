import React, { useState } from 'react';

function ToggleParagraph() {
  // const [isParagraphVisible, setParagraphVisible] = useState(true);

  // const toggleParagraph = (props) => {
  //   setParagraphVisible(!isParagraphVisible);
  // };
  return (
    <div>
      <div>
        <h2>{props.Heading}</h2>
        <button onClick={toggleParagraph}>
          {isParagraphVisible ? 'hide' : 'show'} Paragraph
        </button>
      </div>
      {isParagraphVisible && (
        <ul>
          {props.Paragraph.map((item,index)(
          <li key={index}>{item}</li>))}
        </ul>
      )}
      <div className='line'></div>
    </div>
  );
}

export default ToggleParagraph;