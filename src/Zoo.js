import React from 'react'
import Cage from "./Cage.js"
import "./Zoo.css";

function Zoo() {
  return (
    <div className="zoo">
        <Cage cageNum={1}/>
        <Cage cageNum={2}/>
        <Cage cageNum={3}/>
        <Cage cageNum={4}/>    
    </div>
  )
}

export default Zoo