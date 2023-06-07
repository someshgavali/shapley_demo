import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <div className="headingContainer">
      <div className="headInfo">
        <h1>We Change Everything WordPress</h1>
        <p>This is the only WordPress theme you will ever want to use.</p>
        <div className="btns">
          <button id="btn1">READ MORE</button>
          <button className="btn2">DOWNLOAD NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
