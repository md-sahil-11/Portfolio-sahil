import React, { useEffect, useState } from "react";
import Sr from "./Sr";
import textAnimation from "../Helper/textAnimation";
import "../Styles/about.css";
import CircularBar from "./ProgressBar";

function About() {
  const data = [
    {
      name: "React",
      percentage: 70,
      text: `With a background in design, I work closely with design focused
      teams to build websites and microsites for companies and
      individuals.`,
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Django",
      percentage: 60,
      text: `With a background in design, I work closely with design focused
      teams to build websites and microsites for companies and
      individuals.`,
      img: "https://seeklogo.com/images/D/django-logo-F46C1DD95E-seeklogo.com.png"
    },
    {
      name: "Vue",
      percentage: 40,
      text: `With a background in design, I work closely with design focused
      teams to build websites and microsites for companies and
      individuals.`,
      img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    }
  ];

  const [skill, setSkill] = useState(-1);
  const [val, setVal] = useState(0);

  const mouseOverHandler = (idx) => {
    setSkill(idx);
    // textAnimation('.content')
  };

  useEffect(() => {
    textAnimation(".content");
  }, [skill]);

  const mouseOutHandler = () => {
    setSkill(-1);
  };

  useEffect(() => {
    ["", ""].map((ele, idx) => {
      textAnimation(`.skills${idx + 1}`);
    });

    const myBars = document.querySelectorAll(".bar");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });
    Array.prototype.forEach.call(myBars, (el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <div data-scroll-section className="skills">
      <div className="row" style={{ minHeight: "80vh" }}>
        <div className="info">
          <Sr no={2} />
          <div className="col-md-1 col-xs-0"></div>
          <div className="col-md-5 align-self-center justify-self-center content">
            <br />

            {skill < 0 && (
              <>
                <br />
                <br />
                <h1 className="font-montserrat head skills1 pdy">
                  SKILLS
                  <br />
                </h1>
                <p className="inter-text-400 skills2 pdy">
                  With a background in design, I work closely with design
                  focused teams to build websites and microsites for companies
                  and individuals.
                </p>
              </>
            )}
            {skill >= 0 && (
              <>
                <span className="font-montserrat head skills1 pdy">
                  {data[skill].name}
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      zIndex: "-1",
                      opacity: "0.3"
                    }}
                  >
                    <img
                      className="skill-img"
                      style={{
                        width: "100%",
                      height: "100%",
                      }}
                      src={ data[skill].img }
                      alt=""
                    />
                  </div>
                  <br />
                </span>
                {/* <span className="inter-text-400 pdy">{ val }%</span> */}

                <div
                  style={{
                    height: "200px",
                    width: "200px",
                    overflow: "hidden",
                  }}
                >
                  <CircularBar
                    percentage={data[skill].percentage}
                    setVal={setVal}
                  />
                </div>
                <p className="inter-text-400 skills2 pdy">{data[skill].text}</p>
              </>
            )}
          </div>
        </div>
        <div className="col-md-5 d-flex-vt pdy">
          {/* <div class="container"> */}
          <div
            class="bar"
            onMouseOver={() => mouseOverHandler(0)}
            onMouseLeave={mouseOutHandler}
          >
            React
          </div>
          <div
            class="bar"
            onMouseOver={() => mouseOverHandler(1)}
            onMouseLeave={mouseOutHandler}
          >
            Django
          </div>
          <div class="bar"
            onMouseOver={() => mouseOverHandler(2)}
            onMouseLeave={mouseOutHandler}
          >Vue</div>
          <div class="bar">Docker</div>
          <div class="bar">Firebase</div>
          <div class="bar">Git</div>
          <div class="bar">SQL</div>
          <div class="bar">NoSQL</div>
          <div class="bar">Javascript</div>
          <div class="bar">Python</div>
          <div class="bar">Java</div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
