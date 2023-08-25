import React from 'react'
import data from "/Users/harshsahcdeva/Desktop/demo/project2/src/data/data5.json"
import "../Styles/Card5.css"
import {AiFillInstagram} from 'react-icons/ai';

function Card2() {
  return (
    <div className="container5">
    <div className="cards5">
       {data.map((data2, i) => (
         <div className="card5" key={i}>
           <div className="content5">
           <div className="flexing5">
           <div className="classes1">
           <h1>{data2.serialno}</h1>
           <h5>POSITION</h5></div>
            <div className="classes1">
            <h1>{data2.description}</h1>
            <h5>USERNAME</h5></div>
            <div className="classes2">
            <h1>{data2.instagram}</h1>
            <h5>REFERRALS</h5></div>
              <div className="classes2">
              <h1>{data2.Milestones}</h1>
              <h5>MILESTONES</h5></div>
              <div className="classes2">
              <h1>{data2.name}</h1>
              <h5>POINTS</h5></div>
             </div>
           </div>
         </div>
       ))}
     </div>
     </div>
  )
}

export default Card2;
