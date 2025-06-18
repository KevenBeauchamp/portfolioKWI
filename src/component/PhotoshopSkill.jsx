import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import psLogo from "../assets/js.webp"; // Make sure to place the logo in your project directory

const PhotoshopSkill = () => {
  const percentage = 90;

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="relative w-24 h-24">
      <div className="absolute w-full h-full" style={{ width: "75px" }}>
    <img
      src={psLogo}
      alt="Photoshop Logo"
      className="absolute w-full h-full object-contain opacity-10 z-0"
    />
    <div className="absolute w-full h-full z-10">
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
  </div>
      </div>
      <div className="mt-2 text-white text-sm font-medium">Photoshop</div>
    </div>
  );
};

export default PhotoshopSkill;
