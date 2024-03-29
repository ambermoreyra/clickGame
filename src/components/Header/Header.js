import React from "react";
import "./Header.css";
const Header = props => (
 <div className="header">
   <div className="title">{props.children}</div>
   <div className="scores">
     Score: {props.score} Highscore: {props.highscore}
   </div>
   <br>
   </br>
   <br>
   </br>
   <div className="description">Click on an image to earn points, but don't click on any more than once!</div>

 </div>
);
export default Header;