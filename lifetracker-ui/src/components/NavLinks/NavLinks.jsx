import React from 'react'
import "./NavLinks.css"
import {Link} from "react-router-dom" 

export default function NavLinks() {
  return (
    <div className='nav-links'>
     <Link to="/activity">Activity</Link>
     <Link to ="/nutrition">Nutrition</Link>
     <Link to ="/exercise">Exercise</Link>
     {novalidUser ? <><Link to = "/login">Login</Link><Link to= "/register">Sign Up</Link></>:<Link to ="/">Sign Out</Link>}
      </div>
  )
}
