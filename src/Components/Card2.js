import React from 'react'
import data from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/data/data2.json"
import "../Styles/Card2.css"
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

function Card2() {
  return (
    <div className="container1">
    <div className="cards1">
       {data.map((data2, i) => (
         <div className="card1" key={i}>
           <div className="img1">
             <img src={data2.image} alt="" />
           </div>
           <div className="contentt1">
             <h1>{data2.name}</h1>
             <h5>{data2.designation}</h5>
             <a href={data2.instagram}><AiFillInstagram className="iconnn"/></a>
             <a href={data2.twitter}><AiFillTwitterCircle  className="iconnn"/></a>         
             <p>{data2.description}</p>
           </div>
         </div>
       ))}
     </div>
     </div>
  )
}

export default Card2;
