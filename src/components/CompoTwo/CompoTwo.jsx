import React from "react";
import "./CompoTwo.css";

const CompoTwo = () => {
  return (
    <div className="parent">
      <div className="child1">
        <img
          src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
          alt=""
          width={"700px"}
        />
      </div>
      <div className="child2">
        <h1>SEO Friendly</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar
          luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu
          tincidunt mauris aliquam. Duis commodo vitae ligula et interdum.
          Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
        </p>
        <button className="btn1">READ MORE</button>
      </div>
    </div>
  );
};

export default CompoTwo;
