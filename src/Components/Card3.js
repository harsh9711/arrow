import React from 'react'
import data from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/data/data4.json"
import "../Styles/Card4.css"
import {AiFillInstagram} from 'react-icons/ai';

function Card2() {
  return (
    <div className="container4">
    <div className="cards4">
       {data.map((data2, i) => (
         <div className="card4" key={i}>
           <div className="content4">
           <div className="flexings">
           <a href={data2.instagram}><AiFillInstagram className="icon4"/></a>
             <h1>{data2.name}</h1>
             </div>
             <p>{data2.description}</p>
           </div>
         </div>
       ))}
     </div>
     </div>
  )
}

export default Card2;
