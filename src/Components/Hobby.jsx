import React, { useEffect } from "react";
import Sr from "./Sr";
import textAnimation from "../Helper/textAnimation";
function Hobby() {
    useEffect(() => {
        ["", ""].map((ele, idx) => {
            textAnimation(`.hobby${idx + 1}`);
          });
      
    }, [])
  return (
    <div data-scroll-section className="hobby">
      <div className="row" style={{ minHeight: "80vh" }}>
        <div className="">
          <Sr no={3} />
          <div className="col-md-1 col-xs-0"></div>
          <div className="col-md-5">
            <h1 className="font-montserrat head hobby1 pdy">
              INTERESTS / HOBBIES
              <br />
            </h1>
          </div>
        </div>
        <div className="col-md-5 d-flex-vt pdy">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="bar hobby-text fl-img3">MUSIC</div>
          <div className="bar hobby-text fl-img4" style={{ color: '#000000' }}>BADMINTON</div>
          <div className="bar hobby-text fl-img5">GUITAR</div>
        </div>
      </div>
      <div className="row">
          <div className="col-md-1"></div>
        <div className="col-md-6 inter-text-400 pdy hobby2">
            
          With a background in design, I work closely with design focused teams
          to build websites and microsites for companies and individuals.
        </div>
      </div>
    </div>
  );
}

export default Hobby;
