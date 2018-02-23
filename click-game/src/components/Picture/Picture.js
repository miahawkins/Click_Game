import React from "react";
import "./Picture.css";


const Picture = props =>
  <div className={props.pictureColor}>
    <img src={props.image}/>
  </div>;

export default Picture;