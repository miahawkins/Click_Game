import React from "react";
import "./Picture.css";


const Picture = props =>
  <div 
    className={props.pictureColor}
    onClick={props.whenPictureClicked}
    id={props.id}
  >
    
  </div>;

export default Picture;