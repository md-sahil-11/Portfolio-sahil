import { React, useEffect, useRef, useState } from "react";

import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
// import lax from 'lax.js';
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Sr from "./Components/Sr";
import { gsap } from "gsap";
import simpleParallax from "simple-parallax-js";
import { Curtains, Plane } from "react-curtains";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import About from "./Components/About";
import Work from "./Components/Work";
import Hobby from "./Components/Hobby";
import textAnimation from "./Helper/textAnimation";
import Overlay from "./Components/Overlay";
import createCircles from "./Helper/cursorAnimation";
import BasicPlane from "./Components/Trial";

function App() {
  const containerRef = useRef(null);
  const [overlay, setOverlay] = useState(false);
  const [flimg, setFlimg] = useState(null);

  const moveImage = (e, i) => {
    const imgList = {
      1: require("./Assets/images/fl1.jpeg"),
      2: "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/1/31/w1200X800/PARC_initiative.jpg",
      3: "https://s.rfi.fr/media/display/dbb49488-15d8-11ea-aa65-005056a964fe/w:1280/p:16x9/worldmusicistock-508586144.jpg",
      4: "https://cdn1.epicgames.com/ue/item/Badminton_Screenshot_1-1920x1080-2cf8892509c158692884b8d9548cf005.png?resize=1&w=1920",
      5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfG7cq4WHwtOqe0vNJBAXYLSgmMBDB7L313w&usqp=CAU",
    };
    setFlimg(imgList[i]);
    const img = document.querySelector(".fl-img");
    img.style.visibility = "visible";
    gsap.to(img, {
      opacity: 1,
      ease: "ease",
    });
    img.style.left = e.pageX - img.offsetWidth / 2 + "px";
    img.style.top = e.pageY - img.offsetHeight / 2 + "px";
  };

  const removeImage = () => {
    const img = document.querySelector(".fl-img");
    img.style.opacity = 0;
    img.style.visibility = "hidden";
  };

  useEffect(() => {
    // return () => {
    // window.scrollTo(0, 0)
    // }
    const image = document.querySelector(".fl-img");
    new simpleParallax(image, {
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)",
    });

    document
      .querySelector("body")
      .addEventListener("mousemove", (e) => createCircles(e));

    for (let i = 1; i <= 5; i++) {
      document
        .querySelector(`.fl-img${i}`)
        .addEventListener("mousemove", (e) => moveImage(e, i));

      document
        .querySelector(`.fl-img${i}`)
        .addEventListener("mouseleave", (e) => removeImage(e, i));
    }
  }, []);

  return (
    <>
      <div className="overlay-container container-fluid">
        <Overlay setOverlay={setOverlay} overlay={overlay} />
      </div>
      <div
        data-scroll-container
        ref={containerRef}
        className={
          overlay ? "App stop-scrolling container-fluid" : "App container-fluid"
        }
      >
        {/* <Curtains> */}
          {/* <BasicPlane> */}
          {/* </BasicPlane> */}
        {/* </Curtains> */}
        
        <img className="fl-img" src={flimg} alt="" />
        <Header overlay={overlay} setOverlay={setOverlay} />
        <Landing />
        <About />
        <Hobby />
        <Work />
      </div>
    </>
  );
}

export default App;
