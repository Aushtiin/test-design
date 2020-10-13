import React from "react";
import Headerimg from '../Headerimg.png'

function Header() {
  return (
    <>
      <div>
        <img src={Headerimg} alt="logo image" style={{position: "relative", left: "40px"}} />
      </div>
    </>
  );
}

export default Header;
