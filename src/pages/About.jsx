import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import classes from "../css/About.module.css"
import pics from "../assets/ted.jpg";
import picGood from "../assets/homeimage.jpg";
import picK from "../assets/kevenB.jpg";
import { useMediaQuery } from "react-responsive";


export default function AboutPage(){
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const text  = "Results-driven Software Developer with 3+ years of experience building scalable, user-centric web and mobile applications. Proficient in modern development frameworks, programming languages, and DevOps practices, with a proven track record of delivering innovative solutions that enhance business performance. Skilled in collaborating across teams using Agile methodologies to achieve project objectives. Currently expanding expertise with certifications in CompTIA Network+, CCNA, and A+."
  const baseText = "Dear Hiring Manager, " ;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 10,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);
    return(
        <>
            <div className={classes.content}>
                <div className={isTabletOrMobile?classes.infoMobile: classes.info}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                    >
                       <img src={picK} alt="" sizes="" srcset="" width="300px" />
                    </motion.div>
                    <div>
                      <table>
                      <tr>
                        <td>Email : </td>
                        <td>kevenbeauchamp96@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Phone : </td>
                        <td>+1 (754)2620862</td>
                      </tr>
                      <tr>
                        <td>Language : </td>
                        <td>French,English,Creole</td>
                      </tr>
                      <tr>
                        <td>Freelance : </td>
                        <td>Available</td>
                      </tr>
                      </table>
                    </div>
                </div>
                <div className={isTabletOrMobile?classes.resumeMobile: classes.resume}>
                <motion.p >{displayText}</motion.p>
                {/* <motion.span>{displayText}</motion.span> */}

                </div>
            </div>
        </>
    )
}