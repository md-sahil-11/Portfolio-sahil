import React, { useEffect, useState } from "react";
import ProgressBar from "progressbar.js";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

function CircularBar({ setVal, percentage }) {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => (val < percentage ? val + 1 : val));
    }, 40);
  }, []);

  return (
    <CircularProgressbarWithChildren
      value={value}
      styles={buildStyles({
        strokeLinecap: "butt",

        pathColor: `#000000`,
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7",
      })}
    >
      <div style={{ marginTop: -5 }}>
        <span className="inter-text-400 pdy">{value}%</span>
      </div>
    </CircularProgressbarWithChildren>
  );
}

export default CircularBar;
