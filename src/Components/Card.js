import React from 'react'
import data from "/Users/harshsahcdeva/Desktop/demo/project2/src/data/data.json"
import "../Styles/Card.css"
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
function Card() {
  return (
    <div className="container">
   <div className="cards">
      {data.map((data, i) => (
        <div className="card" key={i}>
          <div className="img">
            <img src={data.image} alt="" />
          </div>
          <div className="content">
            <h1>{data.name}</h1>
            <h5>{data.designation}</h5>
            <a href={data.instagram}><AiFillInstagram className="icon"/></a>
            <a href={data.twitter}><AiFillTwitterCircle  className="icon"/></a>         
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Card;
