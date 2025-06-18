import classes from "../css/Skills.module.css";
import reactpicture from "../assets/react.webp";
import javascript_picture from "../assets/js.webp";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import nodejsPicture from "../assets/nodejs.png";
import phpPicture from "../assets/php.png";
import javaPicture from "../assets/java.png";
import htmlcssPicture from "../assets/htmlcss.png";
import databasePicture from "../assets/databse.png";
import pythonPicture from "../assets/python.png";
import networkSocial from "../assets/management.png"
import laravelImage from "../assets/laravel.webp"
import PhotoshopSkill from "../component/PhotoshopSkill.jsx";
import { useMediaQuery } from "react-responsive";

export default function SkillsPage(){
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const skill_one = [
        "     ",
        " Front-End Developer   ",
        " Back-End Developer  ",
      ];
      const skill_two = [
        " Software Developer    ",
        " Front-End Developer   ",
        " Back-End Developer  ",
      ];
      const skill_three = [
        " Software Developer    ",
        " Front-End Developer   ",
        " Back-End Developer  ",
      ];
    return(
        <>
            <div className={isTabletOrMobile?classes.hiddenContent: " "}>
                <div className={classes.content}>
                    <PhotoshopSkill  percentage="90"  name="JS" logo={javascript_picture} />
                    <PhotoshopSkill  percentage="75"  name="Node JS" logo={nodejsPicture} />
                    <PhotoshopSkill  percentage="90"  name="Html/CSS" logo={htmlcssPicture} />
                    <PhotoshopSkill  percentage="90"  name="PHP" logo={phpPicture} />
                    <PhotoshopSkill  percentage="90"  name="REACT" logo={reactpicture} />
                    <PhotoshopSkill  percentage="80"  name="Laravel" logo={laravelImage} />
                </div>
                <div className={classes.content}>
                <PhotoshopSkill  percentage="70"  name="Python" logo={pythonPicture} />
                <PhotoshopSkill  percentage="75"  name="Java" logo={javaPicture} />
                <PhotoshopSkill  percentage="75"  name="Network Management" logo={networkSocial} />
                <PhotoshopSkill  percentage="80"  name="Database" logo={databasePicture} />
                <PhotoshopSkill  percentage="75"  name="Wireless Technologies" logo={networkSocial} />
                <PhotoshopSkill  percentage="75"  name="Routing And Switching" logo={networkSocial} />
                </div>
            </div>
            <div className={isTabletOrMobile?" ": classes.hiddenContent}>
                <div className={classes.content}>
                <PhotoshopSkill  percentage="90"  name="JS" logo={javascript_picture} />
                <PhotoshopSkill  percentage="75"  name="Node JS" logo={nodejsPicture} />
                <PhotoshopSkill  percentage="90"  name="Html/CSS" logo={htmlcssPicture} />
                <PhotoshopSkill  percentage="90"  name="React" logo={reactpicture} />
                </div>
                <div className={classes.content}>
                <PhotoshopSkill  percentage="80"  name="Laravel" logo={laravelImage} />
                <PhotoshopSkill  percentage="90"  name="PHP" logo={phpPicture} />
                <PhotoshopSkill  percentage="70"  name="Python" logo={pythonPicture} />
                <PhotoshopSkill  percentage="75"  name="Java" logo={javaPicture} />
                </div>
                <div className={classes.content}>
                <PhotoshopSkill  percentage="75"  name="Network Management" logo={networkSocial} />
                <PhotoshopSkill  percentage="80"  name="Database" logo={databasePicture} />
                <PhotoshopSkill  percentage="75"  name="Wireless Technologies" logo={networkSocial} />
                <PhotoshopSkill  percentage="75"  name="Routing And Switching" logo={networkSocial} />
                </div>
            </div>
            
            
            
        </>
    )
}