import React, { useState, useEffect } from "react";
import textAnimation from "../Helper/textAnimation";
import { gsap } from "gsap";


function Menu({ overlay }) {
  const [link, setLink] = useState(1);

  useEffect(() => {
    textAnimation(".content-img");
    // textAnimation(".content-options");
  }, [link]);

  useEffect(() => {
    gsap.fromTo(
        ".content-options",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.4,
        }
      );
      gsap.fromTo(
        ".content-img",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.6,
        }
      );
  }, [overlay])
  return (
    <>
      <div className="row justify-content-end align-content-center align-items-start">
        <div className="col-md-8">
          <img
            className="content-img"
            style={{ width: "100%", height: "auto", opacity: 0 }}
            src={require(`../Assets/images/img${link}.png`)}
            alt=""
          />
        </div>
        <div className="menu col-md-4 pdy content-options">
          <h1
            className="font-montserrat head menu-opt"
            onMouseOver={() => setLink(1)}
          >
            About
          </h1>
          <h1
            className="font-montserrat head menu-opt"
            onMouseOver={() => setLink(2)}
          >
            Work
          </h1>
          <h1
            onMouseOver={() => setLink(1)}
            className="font-montserrat head menu-opt"
          >
            Contact
          </h1>
        </div>
      </div>
    </>
  );
}

export default Menu;
