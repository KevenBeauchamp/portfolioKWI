import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Conatct';
import ProjectPage from './pages/Project';
import Exemple from './pages/Exemple';
import barePic from './assets/3barres.png';
import { useMediaQuery } from 'react-responsive'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import classes from './css/Nav.module.css';
import pdf from "./assets/Keven_BEAUCHAMP.pdf";
import FooterPage from './pages/Footer'
import igPicture from "./assets/instagram.png";
import linkedinPicture from "./assets/linkedin.png";
import githubPicture from "./assets/github.png";

function App() {
  const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {console.log(data)});
  }, [])
  const [count, setCount] = useState(0)
  const routers = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootPage />,
            children: [
                {index: true, element: <HomePage />},
                {path: '/about', element: <AboutPage />},
                {path: '/skills', element: <SkillsPage />},
                {path: '/project', element: <ProjectPage />},
                {path: '/resume', element: <ResumePage />},
                {path: '/contact', element: <ContactPage />},
            ]
        }
    ]
);
const isDeskhrefpOrLaphrefp = useMediaQuery({
  query: '(min-width: 1224px)'
})
const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
const isTablehrefrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
 const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume_Keven.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      {isDeskhrefpOrLaphrefp && <RouterProvider router={routers} />}
      {/* {isBigScreen && <p>You have a huge screen</p>} */}
      {isTablehrefrMobile && 
        // <>
          <div className='content'> 
            <div className='navbar'>
              <div>
                
                <span>Keven</span>
              </div>
              <div className="barreImage">
              <button onClick={handleClick} className='buttonNav'><img src={barePic} alt="" width="35px" /></button>
              </div>
              
            </div> 
            {showNav && (
              <div className="navbarHidd">
                <div><h3>Logo</h3></div>
                <div className="nav">
                <ul className={classes.list}>
                      <motion.li
                          variants={itemVariants}
                          whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                          whileTap={{ scale: 0.95 }}                   
                      >
                          <a
                          href='#home'
                          className={({isActive})=> isActive ? classes.active: undefined}
                          >
                              Home
                          </a>
                      </motion.li>
                      <motion.li
                          variants={itemVariants}
                          whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                          whileTap={{ scale: 0.95 }}  
                      >
                          <a
                          href='#about'
                          className={({isActive})=> isActive ? classes.active: undefined}
                          >
                              About
                          </a>
                      </motion.li>
                      <motion.li
                          variants={itemVariants}
                          whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                          whileTap={{ scale: 0.95 }}  
                      >
                          <a
                          href='#skills'
                          className={({isActive})=> isActive ? classes.active: undefined}
                          >
                              Skills
                          </a>
                      </motion.li>
                      <motion.li
                          variants={itemVariants}
                          whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                          whileTap={{ scale: 0.95 }}  
                      >
                          <a
                          href='#project'
                          className={({isActive})=> isActive ? classes.active: undefined}
                          >
                              Project
                          </a>
                      </motion.li>
                      <motion.li 
                          variants={itemVariants}
                          whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                          whileTap={{ scale: 0.95 }}  
                      >
                          <a
                          href='#resume'
                          className={({isActive})=> isActive ? classes.active: undefined}
                          >
                              Resume
                          </a>
                      </motion.li>
                      <motion.li 
                          variants={itemVariants}
                          whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                          whileTap={{ scale: 0.95 }}  
                      >
                              <a
                              href='#contact'
                              className={({isActive})=> isActive ? classes.active: undefined}
                              >
                                  Contact
                              </a>
                      </motion.li>
                  </ul>
                </div>
                
                {/* <li><a href="#home">Home</a></li> */}
                <div className={classes.buttonCV}>
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
                          My Resume
                  </motion.button>
                </div>
                <div className="social">
                    <span><a href="http://"><img src={igPicture} alt="" srcset="" width="25px" /></a></span>
                    <span><a href="https://www.linkedin.com/in/keven-beauchamp-276551298" target="_blank"><img src={linkedinPicture} alt="" srcset="" width="25px"/></a></span>
                    <span><a href="https://github.com/KevenBeauchamp" target="_blank"><img src={githubPicture} alt="" srcset="" width="25px" /></a></span>
                </div>
              </div>
            )}

            <section id='home'>
            <HomePage />

            </section>  
            <section id='about'>
              <div>
                <h2 className='center'>About me</h2>
                <AboutPage />
              </div>
            </section> 
            <section id='skills'>
              <div>
                <h2 className='center'>My Skills</h2>
                <SkillsPage />
              </div>  
            </section>      
                  
                 
            <section id='project'>
              <ProjectPage />

            </section>       
            <section id='resume'>
              <ResumePage />

            </section>       
            <section id='contact'>
             <ContactPage />

            </section> 
            {/* <section>
                <FooterPage />
            </section>       */}
            
                    
          </div>
        // </>
      }
      {/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p> */}
      {/* {isRetina && <p>You are retina</p>} */}
    </div>
  )
}

export default App
