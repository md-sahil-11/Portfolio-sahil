import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import "../Styles/header.css";

function Header({ overlay, setOverlay }) {
  const selected = useRef();
  const options = useRef();
  const menuList = {
    1: "Sahil Alam",
    2: "About",
    3: "Work",
    4: "Contact",
  };

  const [menu, setMenu] = useState("1");
  const [showToggle, setShowToggle] = useState(false);
  const scrollCheck = () => {
    const offsetY = window.scrollY;

    if (offsetY >= 200) {
      // gsap.to(options.current, { opacity: 0 })
      setShowToggle(true);
      const about = document.getElementById("sec-about");
      const work = document.querySelector(".work");

      if (offsetY >= about.offsetTop) {
        setMenu("2");
      }
      if (offsetY >= work.offsetTop) {
        setMenu("3");
        console.log("here");
      }
    } else {
      setMenu("1");
      setShowToggle(false);
      // gsap.to(options.current, {x: 1 })
    }
  };

  useEffect(() => {
    if (overlay) {

      let scrollTop = window.pageYOffset || window.scrollY;
      let scrollLeft = window.pageXOffset || window.screenX;
      document.querySelector('body').classList.add('stop-scrolling')
      // if any scroll is attempted, set this to the previous value
      gsap.to('.overlay-container', {
        height: '100%'
      })
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      gsap.to('.overlay-container', {
        height: 0
      })
      document.querySelector('body').classList.remove('stop-scrolling')
      window.onscroll = scrollCheck
    }

  }, [overlay])

  useEffect(() => {
    gsap.to(selected.current, { opacity: 1 });
    window.addEventListener("scroll", scrollCheck);
  }, []);

  useEffect(() => {
    selected.current.style.opacity = 0;
    gsap.to(selected.current, { opacity: 1 });
  }, [menu]);

  useEffect(() => {
    // options.current.style.opacity = 0;
    // gsap.to(options.current, { opacity: 1 });
  }, [showToggle]);

  return (
    <header id="nav">
      <div className="flex-hz">
        <div
          className="font-montserrat nav-menu nav-main"
          style={{ opacity: 0 }}
          ref={selected}
        >
          {menuList[menu]}
        </div>
        {showToggle ? (
          <div
            onClick={() => setOverlay(true)}
            className="font-montserrat nav-menu hover-underline-animation"
          >
            Menu
          </div>
        ) : (
          <div className="nav-right flex-hz big-scr" ref={options}>
            <div className="font-montserrat nav-menu hover-underline-animation">
              About
            </div>
            <div className="font-montserrat nav-menu hover-underline-animation">
              Work
            </div>
            <div className="font-montserrat nav-menu hover-underline-animation">
              Contact
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
