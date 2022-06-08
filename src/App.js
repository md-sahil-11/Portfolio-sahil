import { React, useEffect, useRef, useState } from "react";

import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
// import lax from 'lax.js';
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Sr from "./Components/Sr";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import About from "./Components/About";
import Work from "./Components/Work";
import Hobby from "./Components/Hobby";
import textAnimation from "./Helper/textAnimation";

function App() {
  const containerRef = useRef(null);
  const [overlay, setOverlay] = useState(false);
  const [link, setLink] = useState(
    "https://www.hdwallpapers.in/download/its_all_about_me-HD.jpg"
  );
  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    //   // multiplier: 0.5,
    // });
    // lax.init();
  }, []);
  useEffect(() => {
    textAnimation(".content-img");
  }, [link]);

  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     // ... all available Locomotive Scroll instance options
    //   }}
    //   watch={
    //     [
    //       //..all the dependencies you want to watch to update the scroll.
    //       //  Basicaly, you would want to watch page/location changes
    //       //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    //     ]
    //   }
    //   containerRef={containerRef}
    // >
    <>
      {/* {overlay &&  */}
      <div className="overlay-container">
        <div className="overlay">
          <div
            className="font-montserrat nav-menu nav-main pdy"
            onClick={() => setOverlay(false)}
          >
            Close
          </div>
          <br />
          <br />
          <div className="row justify-content-end">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-8">
              <img
                className="content-img"
                style={{ width: "90%", height: "auto" }}
                src={link}
                alt=""
              />
            </div>
            <div className="menu col-md-4 pdy">
              <h1
                className="font-montserrat head menu-opt"
                onMouseOver={() =>
                  setLink(
                    "https://www.hdwallpapers.in/download/its_all_about_me-HD.jpg"
                  )
                }
              >
                About
              </h1>
              <h1
                className="font-montserrat head menu-opt"
                onMouseOver={() =>
                  setLink(
                    "https://www.richardekwonye.com/images/about-cover.jpg"
                  )
                }
              >
                Work
              </h1>
              <h1
                onMouseOver={() =>
                  setLink(
                    "https://img2.goodfon.com/wallpaper/big/d/b9/iphone-5s-apple-touch-id.jpg"
                  )
                }
                className="font-montserrat head menu-opt"
              >
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        data-scroll-container
        ref={containerRef}
        className={overlay ? "App stop-scrolling" : "App"}
      >
        <Header overlay={overlay} setOverlay={setOverlay} />
        {/* <main> */}
        <Landing />
        {/* </main> */}
        <About />
        <Hobby />
        <Work />
      </div>
    </>
    // </LocomotiveScrollProvider>
  );
}

export default App;
