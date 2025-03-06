import { useMediaQuery } from "react-responsive"
import classes from "../css/Resume.module.css"
export default function ResumePage(){
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isClass = isTabletOrMobile ? "education": "";
    console.log(isTabletOrMobile)
    console.log(isClass)
    return(
        <>
            <div>
                <div>
                    <div>
                        <h2 className={classes.center}>My Experience</h2>
                    </div>
                    <div>
                        <div className={classes.experience}>
                            <div className={classes.experiencePartOne}>
                                <h3>Web Developer</h3>
                                <p>Hopital Web HT (Evolucare) </p>
                                <span>08/2021 – 04/2023</span>
                                
                            </div>
                            <div className={classes.experiencePartTwo}>
                                <p>Developed and maintained a healthcare management platform using PHP, JavaScript, and 
                                    Bootstrap, improving system usability for over 500 users. 
                                     Built RESTful APIs with AJAX and JSON to enable efficient client-server communication. 
                                     Enhanced user engagement through interactive web interfaces and responsive design. 
                                     Worked closely with product teams to ensure web applications met technical and business 
                                    requirements.
                                </p>
                            </div>
                        </div>
                        <div className={classes.experience}>
                            <div className={classes.experiencePartOne}>
                                <h3>Software Developer</h3>
                                <p>Freelance</p>
                                <span>09/2023 - 10/2024</span>
                               
                            </div>
                            <div className={classes.experiencePartTwo}>
                                <p>Designed and optimized a photography website using React, PHP API, Redux, and Axios, 
                                    improving user engagement by 20%. 
                                    Developed a feature-rich e-commerce platform with React and Redux, resulting in a 15% 
                                    increase in client sales. 
                                    Conducted performance optimization and debugging to enhance website reliability and 
                                    speed, achieving a 30% faster load time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className={classes.center}>My Education</h2>
                    </div>
                    
                    <div className={isTabletOrMobile?classes.educationMobile: classes.education} >
                        <div>
                            <h3>Network Technician</h3>
                            <p>The Academy South of Florida – Miami, Florida </p>
                            <span>2024</span>
                            <p>Relevant Coursework: IT Support Fundamentals, Networking Essentials, TCP/IP Protocols, Operating 
                            Systems </p>
                        </div>
                        <div>
                            <h3>Bachelor of Computer Science</h3>
                            <p>Ecole Supérieure D’infotronique d’Haïti – Port-au-Prince, Haiti </p>
                            <span>2017-2021</span>
                            <p>Equivalency USA: Bachelor of Computer Science by World Education Services (WES) </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}