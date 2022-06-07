import React, { useEffect, useState } from "react";
import ProgressBar from "progressbar.js";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

function CircularBar({ setVal, percentage }) {
  // const [val, setVal] = useState(0)
  useEffect(() => {
    //   document.querySelector('.CircularProgressbar-text')?.x = 40
    // var bar = new ProgressBar.Circle(document.querySelector('#progressBar'), {
    //     color: '#aaa',
    //     // This has to be the same size as the maximum width to
    //     // prevent clipping
    //     strokeWidth: 4,
    //     trailWidth: 1,
    //     easing: 'easeInOut',
    //     duration: 1400,
    //     text: {
    //       autoStyleContainer: false
    //     },
    //     from: { color: '#aaa', width: 1 },
    //     to: { color: '#000000', width: 4 },
    //     // Set default step function for all animate calls
    //     step: function(state, circle) {
    //       circle.path.setAttribute('stroke', state.color);
    //       circle.path.setAttribute('stroke-width', state.width);
    //       var value = Math.round(circle.value() * 100);
    //       if (value === 0) {
    //         // circle.setText('');
    //         setVal(0)
    //       } else {
    //         // circle.setText(value);
    //         setVal(value)
    //       }
    //     }
    //   });
    // //   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    // //   bar.text.style.fontSize = '2rem';
    //   bar.animate(percentage);
  }, []);

  return (
    <>
      {/* <div id="progressBar"></div> */}
      {/* <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value) => {
          return ( */}
      <CircularProgressbarWithChildren
        value={percentage}
        //   text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          //   rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          // textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 12,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `#000000`,
          // textColor: "#000000",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      >
        <div style={{ marginTop: -5 }}>
        <span className="inter-text-400 pdy">{ percentage }%</span>
        </div>
      </CircularProgressbarWithChildren>
      {/* ); */}
      {/* }} */}
      {/* </AnimatedProgressProvider> */}
    </>
  );
}

export default CircularBar;
