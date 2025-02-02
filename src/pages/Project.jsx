import classes from "../css/Project.module.css";
import pictureDessaie from "../assets/ted.jpg";
import pictureWeather from "../assets/kwiweather.png";
import quotegeneratorPicture from "../assets/quotegenerator.png";
import nettopoPicture from "../assets/networktopologie.png";
import todolistPicture from "../assets/totdolist.png";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function ProjectPage(){
    return(
        <>
            <div>
                <div className={classes.title}>
                    <h1>My Projects</h1>
                </div>
                <div>
                    <div  className={classes.contentProject}>
                        <div className={classes.oneProject}>
                        <motion.div
                                className={classes.imageProject}
                                    whileHover={{
                                        scale: [null, 1.1, 2.7],
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
                                <img src={todolistPicture} alt="Soon" width="180px"  />
                            </motion.div>
                            <div className={classes.infoProject}>
                                <h4>ToDo List</h4>
                                <p>Developed a dynamic To Do list  with Laravel API and React, incorporating a 
                                modern, intuitive user interface. </p>
                                <span>React JS, Redux and Laravel API</span>
                            </div>
                        </div>
                        <div className={classes.oneProject}>
                            <motion.div
                                className={classes.imageProject}
                                    whileHover={{
                                        scale: [null, 1.1, 3.5],
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
                                <img src={quotegeneratorPicture} alt="Soon" width="180px"  />
                            </motion.div>
                            <div className={classes.infoProject}>
                                <h4>Quote Generator</h4>
                                <p> You can generate a random quote or you can choose by categories. You can see a random quote every day, I call it the day quote.</p>
                                <span>React JS</span>
                            </div>
                        </div>
                    </div>
                    <div  className={classes.contentProject}>
                        <div className={classes.oneProject}>
                        <motion.div
                                className={classes.imageProject}
                                    whileHover={{
                                        scale: [null, 1.1, 2.7],
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
                                <img src={pictureWeather} alt="Soon" width="180px"  />
                            </motion.div>
                            <div className={classes.infoProject}>
                                <h4>Weather App</h4>
                                <p>The app gives you standard weather information such as hourly temperatures, wind speed, and humidity. You can search for the city where you want to see the weather. The app can give you the weather where you are if you accept</p>
                                <span>ryery</span>
                            </div>
                        </div>
                        <div className={classes.oneProject}>
                        <motion.div
                                className={classes.imageProject}
                                    whileHover={{
                                        scale: [null, 1.1, 3.5],
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
                                <img src="" alt="Soon" width="180px"  />
                            </motion.div>
                            <div className={classes.infoProject}>
                                <h4>Movie Preference</h4>
                                <p>You can search for a movie, add it to your favorites or wishlist. I used firebase for this project</p>
                                <span>React JS, Firebase</span>
                            </div>
                        </div>
                    </div>
                    <div  className={classes.contentProject}>
                        <div className={classes.oneProject}>
                            <motion.div
                                className={classes.imageProject}
                                    whileHover={{
                                        scale: [null, 1.1, 2.5],
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
                                <img src={nettopoPicture} alt="" width="180px" />
                            </motion.div>
                            <div className={classes.infoProject}>
                                <h4>Network Simulation</h4>
                                <p>I implemented 4 routing protocols: OSPF, BGP, EIGRP, and RIPV2. I created VLAN on the switch. All devices get their IP address from the DHCP router in coorporate 1 and 2.</p>
                                <span></span>
                            </div>
                        </div>
                        <div className={classes.oneProject}>
                        <motion.div
                            className={classes.imageProject}
                                whileHover={{
                                    scale: [null, 1.1, 2.3],
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
                                <img src="" alt="Soon" width="180px"  />
                            </motion.div>
                            <div className={classes.infoProject}>
                                <h4>School Management System</h4>
                                <p>Built a comprehensive web-based system with Laravel and React, streamlining 
administrative workflows by 25%. Utilized Redux for state management and MySQL for efficient database handling. </p>
                                <span>React JS, Redux, React Router and Laravel API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}