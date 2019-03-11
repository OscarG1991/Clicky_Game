import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li id="right-wrong">{props.rightWrong}</li>

      <li id="current-score">Score: {props.score}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;