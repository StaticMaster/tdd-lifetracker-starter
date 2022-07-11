import * as React from "react";
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import sonic from "../../assets/sonic-running.gif"

export default function Navbar() {
  return (
    <nav className="navbar">


      <div className="logo">
        <Link to="/">
        <img
          src={sonic}
          alt="main logo"
          height="50px"
          width="50px"/>
        </Link>
       </div>
      
      <ul className="navbar-nav">
      <Link to="/activity" className="link"><li>Activity</li></Link>
      <Link to="/exercise"className="link"><li>Exercise</li></Link>
      <Link to="/nutrition"className="link"><li>Nutrition</li></Link>
      <Link to="/sleep"className="link"><li>Sleep</li></Link>
      <Link to="/login"className="link"><li className="btn">Login</li></Link>
      <Link to="/register"className="link"><li className="btn">Sign Up</li></Link>
      </ul>
    </nav>
  );
}
