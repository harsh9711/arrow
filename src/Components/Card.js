import React from 'react'
import data from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/data/data.json"
import "../Styles/Card.css"
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
function Card() {
  return (
    <div className="containerr">
   <div className="cardds">
      {data.map((data, i) => (
        <div className="carddd" key={i}>
          <div className="img">
            <img src={data.image} alt="" />
          </div>
          <div className="contennt">
            <h1>{data.name}</h1>
            <h5>{data.designation}</h5>
            <a href={data.instagram}><AiFillInstagram className="iconnn"/></a>
            <a href={data.twitter}><AiFillTwitterCircle  className="iconnn"/></a>         
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Card;
