import React, { useState, useEffect } from "react";
import textAnimation from "../Helper/textAnimation";
import Menu from "./Menu";

function Overlay({ setOverlay, overlay }) {
 
  return (
    <div className="overlay">
      <div
      style={{textAlign: 'right'}}
        className="font-montserrat nav-menu nav-main pdy"
        onClick={() => setOverlay(false)}
      >
        Close
      </div>
      <br />
      <br />
      <br />
      <br />
      <Menu overlay={overlay} />
    </div>
  );
}

export default Overlay;
