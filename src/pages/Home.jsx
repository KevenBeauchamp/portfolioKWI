import { motion, useMotionValue, useTransform, animate } from "framer-motion";
  import classes from "../css/Home.module.css"
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive"
import pdf from "../assets/Keven_BEAUCHAMP.pdf";
import reactpicture from "../assets/react.webp";
import javascript_picture from "../assets/js.webp";
import databasePicture from "../assets/database.png";
import pythonPicture from "../assets/python.png";
import nodejsPicture from "../assets/nodejs.png";
import phpPicture from "../assets/php.png";
import javaPicture from "../assets/java.png";
import igPicture from "../assets/instagram.png";
import linkedinPicture from "../assets/linkedin.png";
import githubPicture from "../assets/github.png";
export default function HomePage(){
    const text = "Software Developer".split(" ");
    const textIndex = useMotionValue(0);
  const texts = [
    " Software Developer    ",
    " Front-End Developer   ",
    " Back-End Developer  ",
    "Network Administrator  ",
  ];
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isClass = isTabletOrMobile ? "education": "";
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);
  const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume_Keven.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 2.45,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      delay: 0.75,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, []);
    return(
            <div className={classes.home}>
              <motion.div
                  initial= {{opacity:0}}
                  animate={{opacity:1}}
                  transition={{delay:0.5, duration:0.5}}            
                  className={isTabletOrMobile?classes.contentMobile: classes.content}
              >
                  
                  <h1>Hi, I'm <motion.span
                  initial= {{opacity:0}}
                          animate={{
                              fontSize: "50px", color: '#0000ff',opacity:1
                          }}
                          transition={{delay:1.7, duration:1}}
                  >Keven Beauchamp</motion.span></h1> 
                  <h3 >  I am  &nbsp; 
                      <motion.span className="inline">{displayText}</motion.span>
                      &nbsp; <br/> based in USA. I have three  certificates and a Bachelor's <br/> degree in computer science </h3>
                  <div className={classes.allButton}>                   
                  {/* <div>
                    <motion.button
                      onClick={onButtonClick}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{
                        scale: 1.1,
                        backgroundColor: "#0000ff",
                        color: "black",
                        }}
                        transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                        className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
                    >
                        Download CV
                    </motion.button>

                  </div> */}
                  {/* <div className={isTabletOrMobile?classes.hireButtonMobile: classes.hireButton}>
                    <motion.button
                      onClick={onButtonClick}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{
                        scale: 1.1,
                        backgroundColor: "#0000ff",
                        color: "black",
                        }}
                        transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                        className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
                    >
                        Hire
                    </motion.button>
                  </div> */}
                  </div>
              </motion.div>
              {/* <div className={isTabletOrMobile?classes.partThreeMobile: classes.partThree}>
                  <h3>Certificate</h3>
                  <p>Comptia Network +</p>
                  <p>IBM Full Stack Software Developer Professional Certificate</p>
                  <p>CCNA</p>
                  <p>Azure administration</p>
              </div> */}
              <div className={isTabletOrMobile?classes.partTwoMobile: classes.partTwo}>
                <div className={classes.skill}>
                      <div className={classes.skillOne}>
                        <img src={javascript_picture}  width="25px" height="25px" alt="" srcset="" />
                      </div>
                      <div className={classes.skillOne}>
                        <img src={nodejsPicture} width="25px" height="25px" alt="" srcset="" />

                      </div>
                      <div className={classes.skillOne}>
                        <img src={phpPicture} width="25px" height="25px" alt="" srcset="" />

                      </div>
                      <div className={classes.skillOne}>
                        <img src={pythonPicture} width="25px" height="25px" alt="" srcset="" />

                      </div>
                      <div className={classes.skillOne}>
                        <img src={javaPicture} width="25px" height="25px" alt="" srcset="" />

                      </div>
                      <div className={classes.skillOne}>
                       <img src={reactpicture} width="25px" height="25px" alt="" srcset="" />

                      </div>
                      <div className={classes.skillOne}>
                        <img src={javascript_picture} width="25px" height="25px" alt="" srcset="" />

                      </div>
                </div>
                {/* <div>
                      <div className={classes.social}>
                        <span><a href="http://"><img src={igPicture} alt="" srcset="" width="25px" /></a></span>
                        <span><a href="https://www.linkedin.com/in/keven-beauchamp-276551298" target="_blank"><img src={linkedinPicture} alt="" srcset="" width="25px"/></a></span>
                        <span><a href="https://github.com/KevenBeauchamp" target="_blank"><img src={githubPicture} alt="" srcset="" width="25px" /></a></span>
                      </div>
                </div> */}
                
              </div>
              
            </div>
        
    )
}