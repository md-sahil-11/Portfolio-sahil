import React, { useEffect, useState } from "react";
import textAnimation from "../Helper/textAnimation";
import "../Styles/work.css";
import Sr from "./Sr";
import simpleParallax from "simple-parallax-js";

function Work() {
  useEffect(() => {
    let n = 9;
    for (let i = 0; i < n; i++) {
      textAnimation(".work" + (i + 1));
    }

    var image = document.querySelector(".project-img1");
    new simpleParallax(image, {
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)",
    });
  }, []);

  return (
    <section data-scroll-section className="work pdy">
      <div className="experience pdy">
        <div className="row py-5 pdy" style={{ minHeight: "100vh" }}>
          <br />
          <br />
          <br />
          <br />
          <Sr no={1} />
          <div className="col-md-1 col-xs-0"></div>
          <div className="col-xs-10">
            <h1 className="font-montserrat head work1 pdy">
              EXPERIENCES
              <br />
            </h1>
            <br />
            <br />
            <br />
            <div className="row landing-lax3">
              <div className="col-md-5">
                <p className="inter-text-400 work2">
                  <strong style={{ borderBottom: "1px solid #000000" }}>
                    SKYLARKLABS PVT LTD
                  </strong>
                  <p style={{ fontSize: 20 }}>09/2021 - Now / REMOTE</p>
                </p>
              </div>
              <div className="col-md-7 work3">
                <p className="inter-text-400">
                  Built a user-friendly website AI Console dashboard, resulting
                  in a 25% increase in user traffic and subsequently 33% in
                  customer purchases.
                  {/* <br />
                  <br />
                  Built a modular and reusable code component for demos where
                  uploaded files by users get processed with different ML
                  models, which reduces development time by 40%. */}
                  
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row landing-lax3">
              <div className="col-md-5">
                <p className="inter-text-400 work4">
                  <strong style={{ borderBottom: "1px solid #000000" }}>
                    EKANK TECHNOLOGY PVT LTD
                  </strong>
                  <p style={{ fontSize: 20 }}>09/2021 - Now / REMOTE</p>
                </p>
              </div>
              <div className="col-md-7 work5">
                <p className="inter-text-400">
                  Built a user-friendly website AI Console dashboard, resulting
                  in a 25% increase in user traffic and subsequently 33% in
                  customer purchases.
                  {/* <br />
                  <br />
                  Built a modular and reusable code component for demos where
                  uploaded files by users get processed with different ML
                  models, which reduces development time by 40%. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="projects">
        <div className="row">
          <Sr no={2} />
          <div className="col-md-1 col-xs-0"></div>

          <div className="col-md-4">
            <br />
            <br />
            <h1 className="font-montserrat head work6">PROJECTS</h1>
            <br />
            <br />
            <br />
            <div
              style={{
                fontSize: 50,
                textDecoration: "underline",
              }}
              className="hobby-text work7"
            >
              AI CONSOLE
            </div>
            <p className="inter-text-400 pdy work8">
              Built a user-friendly website AI Console dashboard, resulting in a
              25% increase in user traffic and subsequently 33% in customer
              purchases.
            </p>
          </div>
          <div className="col-md-6 work9">
            <img
              className="project-img1"
              style={{ width: "100%", height: "100vh" }}
              src="https://www.richardekwonye.com/images/cruuunchify-cover.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
