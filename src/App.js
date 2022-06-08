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
    "https://st2.depositphotos.com/1032577/5312/i/950/depositphotos_53128333-stock-photo-about-me-sign.jpg"
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
                    "https://st2.depositphotos.com/1032577/5312/i/950/depositphotos_53128333-stock-photo-about-me-sign.jpg"
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
                    "https://media.istockphoto.com/photos/got-a-problem-contact-us-picture-id1129113667?k=20&m=1129113667&s=612x612&w=0&h=-NVtUCwT5PYmfHgHWUTKNkJhyJ_9rnD5m9ryN_ai_X4="
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
