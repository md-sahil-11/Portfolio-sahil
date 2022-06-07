import React, { useEffect } from "react";
import "../Styles/landing.css";
import Sr from "./Sr";
import lax from 'lax.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import textAnimation from "../Helper/textAnimation";

function Landing() {
  gsap.registerPlugin(ScrollTrigger);

  // const textAnimation = (ele, num = 70) => {
  //   gsap.fromTo(ele, 
  //     {
  //       opacity: 0,
  //       y: num
  //     },
  //     {
  //       scrollTrigger: {
  //         trigger: ele,
  //       },
  //       opacity: 1,
  //       y: 0
  //     }
  //   );
    
  // }
  useEffect(() => {
    lax.init()
    lax.addDriver(
      'scrollY',                          
      function () {                     
        return window.scrollY    
      }
    )

    lax.addElements('.landing-lax1', {
      scrollY: {
        translateY: [
          [0, 20],
          [0, -20],
        ]
      }
    })

    textAnimation(".landing-lax2")
    textAnimation(".landing-lax3")
    
  }, [])
  return (
    <div data-scroll-section className="landing">
      <div className="row" style={{ minHeight: "80vh" }}>
        <div className="col-md-2 col-xs-0"></div>
        <div className="col-md-9 col-xs-12">
          <h1 className="font-montserrat head landing-lax1">
            HELLO, I AM A <br />
            FULL-STACK DEVELOPER
          </h1>
          <br />
          <div className="row">
            <div className="col-md-3 nav-main font-montserrat">From India</div>
            <div className="col-md-9 nav-main font-montserrat">
              Currently Student at <br />
              National Institute of Technology, Rourkela
            </div>
          </div>
        </div>
      </div>
      <div  className="row py-5" style={{minHeight: '100vh'}}>
        <Sr no={1} />
        <div className="col-md-1 col-xs-0"></div>
        <div
          className="col-xs-10"
        >
          <p className="inter-text-500 landing-lax2">
            PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING ON THE INTERESTING
            AND CHALLENGING IDEAS. I CREATE MEMORABLE WEB APPLICATIONS.
          </p>
          <br />
          <br />
          <br />
        <div className="row landing-lax3" id="sec-about">
          <div className="col-md-5">
            <p className="inter-text-400">A blend of frontend and backend engineering.</p>
          </div>
          <div className="col-md-7">
            <p className="inter-text-400">
              With a background in design, I work closely with design focused
              teams to build websites and microsites for companies and individuals. 
              <br />
              <br />
              With my experience in UI and product engineering, I
              solve product problems and build appealing usable web experiences.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
