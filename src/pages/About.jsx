import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import classes from "../css/About.module.css"
import pics from "../assets/ted.jpg";
import picGood from "../assets/homeimage.jpg";
import picK from "../assets/kevenB.jpg";
import { useMediaQuery } from "react-responsive";
import pdf from "../assets/Keven_BEAUCHAMP.pdf";


export default function AboutPage(){
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const text  = "Results-driven Software Developer with 3+ years of experience building scalable, user-centric web and mobile applications. Proficient in modern development frameworks, programming languages, and DevOps practices, with a proven track record of delivering innovative solutions that enhance business performance. Skilled in collaborating across teams using Agile methodologies to achieve project objectives. Currently expanding expertise with certifications in CompTIA Network+, CCNA, and A+."
  const baseText = "Dear Hiring Manager, " ;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );
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
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 10,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);
    return(
        <>
            <div className={isTabletOrMobile?classes.contentMobile: ""}>
                <div className={isTabletOrMobile?classes.infoMobile: ""}>
                  <div className={isTabletOrMobile?"": classes.content }>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        className={classes.picture}
                    >
                       <img src={picK} alt="" sizes="" srcset="" width="500px" />
                    </motion.div>
                    <div className={isTabletOrMobile?classes.resumeMobile: classes.resume}>
                      <motion.p >{displayText}</motion.p>
                      {/* <motion.span>{displayText}</motion.span> */}

                    </div>
                  </div>
                  <div className={isTabletOrMobile?"": classes.content }>
                    <div className={isTabletOrMobile?classes.tableResumeMobile: classes.tableResume}>
                        
                        <table>
                          <caption>
                            Information
                          </caption>
                          <tr>
                            <td>Email : </td>
                            <td>kevenbeauchamp96@gmail.com</td>
                          </tr>
                          <tr>
                            <td>Phone    : </td>
                            <td>+1 (754)2620862</td>
                          </tr>
                          <tr>
                            <td>Language  : </td>
                            <td>French,English,Creole</td>
                          </tr>
                          <tr>
                            <td>Freelance: </td>
                            <td>Available</td>
                          </tr>
                        </table>
                    </div>
                    <div className={isTabletOrMobile?classes.tableResumeMobile: classes.tableResume}>
                        <table>
                          <caption>
                              Certification
                          </caption>
                          <tr>
                            <td>ComptIA Network+ </td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Badge</a></td>
                          </tr>
                          <tr>
                            <td>IBM Full Stack Develloper </td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Certificate</a></td>
                          </tr>
                          <tr>
                            <td>CCNA</td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Badge</a></td>
                          </tr>
                        </table>
                    </div>
                  </div>
                    
                </div>
                <div className= {isTabletOrMobile?classes.buttonAboutMobile: classes.buttonAbout}>
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
                </div>
            </div>
        </>
    )
}