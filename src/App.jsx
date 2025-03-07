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
import { useMediaQuery } from 'react-responsive'


function App() {
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
const isDesktopOrLaptop = useMediaQuery({
  query: '(min-width: 1224px)'
})
const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div>
      {isDesktopOrLaptop && <RouterProvider router={routers} />}
      {/* {isBigScreen && <p>You have a huge screen</p>} */}
      {isTabletOrMobile && 
        // <>
          <div className='content'> 
            <div className='navbar'>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div> 
            <section id='home'>
            <HomePage />

            </section>       
            <section id='about'>
              <div>
                <h2 className='center'>About me</h2>
                <AboutPage />
              </div>
            </section>       
            <section id='skils'>
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
            
                    
          </div>
        // </>
      }
      {/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p> */}
      {/* {isRetina && <p>You are retina</p>} */}
    </div>
  )
}

export default App
