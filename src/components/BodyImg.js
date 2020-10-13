import React from "react";
import bodyimg from "../bodyimg.png"

function BodyImg() {
  return (
    <>
      <div style={{position: "relative", left: "40px"}}  >
          <img src={bodyimg} alt=""/>
      </div>
    </>
  );
}

export default BodyImg;
