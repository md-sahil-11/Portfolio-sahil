import { React, useEffect, useRef } from "react";

import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
// import lax from 'lax.js';
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Sr from "./Components/Sr";

// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import About from "./Components/About";
import Work from "./Components/Work";
import Hobby from "./Components/Hobby";

function App() {
  const containerRef = useRef(null);
  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    //   // multiplier: 0.5,
    // });
    // lax.init();
  }, []);

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
      <div
        // data-scroll-container
        ref={containerRef}
        className="App"
      >
        <Header />
        {/* <main> */}
        <Landing />
        {/* </main> */}
        <About />
        {/* <Work /> */}
        <Hobby />
      </div>
    </>
    // </LocomotiveScrollProvider>
  );
}

export default App;
