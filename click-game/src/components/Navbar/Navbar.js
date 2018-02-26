import React from "react";
import "./Navbar.css";
// import "../App.js";


const Navbar = () =>
  <div className= "navbar">
    <h1>Clicky Game</h1>
    <h3>Click a box and try not to click the same box over again!</h3>
    <div id="score">
      Score: {} | Top Score: {}
    </div>
  </div>;

export default Navbar;
