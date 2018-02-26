import React from "react";
import "./PictureList.css";
import Picture from '../Picture/Picture';

const PictureList = props =>
  <div>
    {props.results.map((result, index) =>
      <div key={result}>
        <Picture
          pictureColor={result}
          cats={props.cats[index]}
          whenPictureClicked={props.whenPictureClicked}
          id={index + 1}
        />
      </div>
    )}
  </div>;

export default PictureList;
