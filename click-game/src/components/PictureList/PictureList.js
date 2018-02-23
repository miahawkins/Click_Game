import React from "react";
import "./PictureList.css";
import Picture from '../Picture/Picture';

const PictureList = props =>
  <ul>
    {props.results.map(result =>
      <li key={result}>
        <Picture
          pictureColor={result}
          
        />
      </li>
    )}
  </ul>;

export default PictureList;
