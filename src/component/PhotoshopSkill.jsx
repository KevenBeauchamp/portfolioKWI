// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import psLogo from "../assets/js.webp"; // Make sure to place the logo in your project directory
// // import "../css/PhotoshopSkill.module.css";
// import "../css/PhotoshopSkill.css"
// export default function PhotoshopSkill ( {percentage,name,logo})  {
//   //  percentage = 90;
//   //  name = "Photoshop";
//   //  logo = psLogo;
//   return (
//   <div className="skill-container">
//       <div className="progress-wrapper">
//         <img src={logo} alt="Photoshop Logo" className="skill-bg" />
//         <CircularProgressbar
//           value={percentage}
//           text={`${percentage}%`}
//           styles={buildStyles({
//             textColor: "white",
//             pathColor: "#00CFFF",
//             trailColor: "#1a1a1a",
//             textSize: "24px",
//           })}
//         />
//       </div>
//       <div className="skill-label">{name}</div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion, useAnimation } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import "../css/PhotoshopSkill.css";

export default function PhotoshopSkill({ percentage = 80, name = "Skill", logo }) {
  const controls = useAnimation();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    controls.start({
      value: percentage,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [percentage]);

  // Animate the number from 0 to `percentage`
  useEffect(() => {
    let currentVal = 0;
    const interval = setInterval(() => {
      currentVal += 1;
      setCurrent((prev) => {
        if (prev >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return currentVal;
      });
    }, 15); // duration control (smaller = faster)

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="skill-container">
      <div className="progress-wrapper">
        <img src={logo} alt={`${name} Logo`} className="skill-bg" />
        <CircularProgressbar
          value={current}
          text={`${current}%`}
          styles={buildStyles({
            textColor: "white",
            pathColor: "#00CFFF",
            trailColor: "#1a1a1a",
            textSize: "24px",
          })}
        />
      </div>
      <div className="skill-label">{name}</div>
    </div>
  );
}
