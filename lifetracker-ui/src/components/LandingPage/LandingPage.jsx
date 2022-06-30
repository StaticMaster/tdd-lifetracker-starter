import React from 'react'
import './LandingPage.css'
import tomcruise from "../../assets/tom-cruise-running.gif"
import planner from "../../assets/planner.svg"
import porridge from "../../assets/porridge.svg"
import resting from "../../assets/resting.svg"
import workout from "../../assets/workout.svg"

export default function LandingPage() {
  return (
    <div className='landing-page'>
<div className='hero'> 
    <div className='cta'>
    <h1 className='landingpage-title'>Life Tracker</h1>
    </div>
    <div className='tomcruise'> 
   <img src={tomcruise} alt="hero img"/>
    </div>
    <div className='text'>
    <p>Helping you take back control of your world</p>
    </div>
    <div className='tiles'>
    <div className='tile>'>
    <img src={workout} alt="Fitness"></img>
    <p>Fitness</p>  
    </div>
    <div className='tile>'>
    <img src={porridge} alt="Food"></img>
    <p>Food</p>  
    </div>
    <div className='tile>'>
    <img src={resting} alt="Rest"></img>
    <p>Rest</p>  
    </div>
    <div className='tile>'>
    <img src={planner} alt="Planner"></img>
    <p>Planner</p>  
    </div>


   
    </div>
 </div>  
</div>
  )
}
