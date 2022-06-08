import React, { useRef, useState, useLayoutEffect } from "react";
import {
  gsap,
  TweenMax,
  TweenLite,
  TimelineLite,
  Power3,
  Power2,
  Circ,
} from "gsap";

export const Text = ({ text }) => {
//   const [text, settext] = useState("Hello there people");
  const array = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      array.push("&nbsp;");
    } else {
      array.push([text[i]]);
    }
  }

  useLayoutEffect(() => {
    array.map((item, i) => {
      console.log(`.char${i}`);
      gsap.to(`.char${i}`, {
        fontSize: '64px',
        // ease: Power3.easeInOut,
        delay: i * 0.03,
      });
    });
  }, []);

  return (
    <>
      {text && array.map((item, i) => (
        <span
          className={`chars char${i}`}
        >
          {item == "&nbsp;" ? <span>&nbsp;</span> : item}
        </span>
      ))}
    </>
  );
};
