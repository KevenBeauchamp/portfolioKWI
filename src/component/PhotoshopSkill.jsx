import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import psLogo from "../assets/js.webp"; // Make sure to place the logo in your project directory
// import "../css/PhotoshopSkill.module.css";
import "../css/PhotoshopSkill.css"
export default function PhotoshopSkill ( {percentage,name,logo})  {
  //  percentage = 90;
  //  name = "Photoshop";
  //  logo = psLogo;
  return (
  <div className="skill-container">
      <div className="progress-wrapper">
        <img src={logo} alt="Photoshop Logo" className="skill-bg" />
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
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

