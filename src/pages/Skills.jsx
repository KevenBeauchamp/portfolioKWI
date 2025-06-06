import classes from "../css/Skills.module.css";
import reactpicture from "../assets/react.webp";
import javascript_picture from "../assets/js.webp";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import nodejsPicture from "../assets/nodejs.png";
import phpPicture from "../assets/php.png";
import javaPicture from "../assets/java.png";
import htmlcssPicture from "../assets/htmlcss.png";
import databasePicture from "../assets/database.png";
import pythonPicture from "../assets/python.png";
import networkSocial from "../assets/social-network.png"
export default function SkillsPage(){
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
            <div >
            <h2 className={classes.title}>My Skills</h2>

                <div className={classes.content}>
                <motion.div
                className={classes.model}
                    whileHover={{
                        scale: [null, 1.1, 1.3],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >
                        <img src={javascript_picture} alt="" srcset=""  width="75px"/>
                        <h3>85%</h3>
                        <span>Javascript</span>
                    </motion.div>
                    <motion.div
                className={classes.model}
                    whileHover={{
                        scale: [null, 1.1, 1.3],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >                    
                {/* 
                <img src={javaPicture} alt="" srcset=""  width="75px"/> */}
                    <h3>75%</h3>
                        <span>Java</span>
                        </motion.div>
                        <motion.div
                className={classes.model}
                    whileHover={{
                        scale: [null, 1.1, 1.3],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >                    <img src={pythonPicture} alt="" srcset=""  width="75px"/>
                    <h3>65%</h3>
                        <span>Python</span>
                        </motion.div>                    <motion.div
                className={classes.model}
                    whileHover={{
                        scale: [null, 1.1, 1.3],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >                    <img src={reactpicture} alt="" srcset=""  width="75px"/>
                    <h3>85%</h3>
                        <span>React JS</span>
                        </motion.div>              
                </div>
                <div className={classes.content}>
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                    <img src={htmlcssPicture} alt="" srcset=""  width="75px"/>
                        <h3>90%</h3>
                            <span>HTML5/CSS3</span>
                            </motion.div>                   
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                    <img src={phpPicture} alt="" srcset=""  width="75px"/>
                        <h3>80%</h3>
                            <span>PHP/ Laravel</span>
                            </motion.div>                    
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                    <img src={nodejsPicture} alt="" srcset=""  width="75px"/>
                        <h3>65%</h3>
                            <span>Node JS</span>
                            </motion.div>                    
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                        <img src={databasePicture} alt="" srcset=""  width="75px"/>
                            <h3>85%</h3>
                            <span>Database</span>
                            </motion.div>   
                </div>
                <div className={classes.content}>
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                    <img src={networkSocial} alt="" srcset=""  width="75px"/>
                        <h3>90%</h3>
                            <span>Network Configuration 
                            </span>
                            </motion.div>                   
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                    <img src={networkSocial} alt="" srcset=""  width="75px"/>
                        <h3>80%</h3>
                            <span>Network Troubleshooting</span>
                            </motion.div>                    
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                    <img src={networkSocial} alt="" srcset=""  width="75px"/>
                        <h3>65%</h3>
                            <span>Networking Concepts</span>
                            </motion.div>                    
                            <motion.div
                    className={classes.model}
                        whileHover={{
                            scale: [null, 1.1, 1.3],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >                        <img src={networkSocial} alt="" srcset=""  width="75px"/>
                            <h3>85%</h3>
                            <span>Routing & Switching</span>
                            </motion.div>   
                </div>
                {/* <div>                
                    <div className={classes.mdoalcircular} style={{
                        // backgroundImage: `url(${javascript_picture})`,
                        // backgroundSize: '60px',
                        // backgroundRepeat: 'no-repeat',
                        // backgroundPosition: 'center',
                        // opacity: 0.5,
                        }}>
                        <svg sty xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                           <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="white"
                                stroke-width="10"
                                fill="none"                            
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="blue"
                                stroke-width="10"
                                fill="none"
                                stroke-dasharray="251.2"
                                stroke-dashoffset="62.8"
                                transform="rotate(-90 50 50)"
                            />
                        </svg>
                        <p className={classes.pourcentage}>75%</p>
                    </div>
                    <p>Javascript</p>
                </div> */}
            </div>
        </>
    )
}