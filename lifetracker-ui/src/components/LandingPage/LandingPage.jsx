import React from 'react'
import './LandingPage.css'
import tomcruise from "../../assets/tom-cruise-running.gif"

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
 </div>  
</div>
  )
}
