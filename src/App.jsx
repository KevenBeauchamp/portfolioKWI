import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Conatct';
import ProjectPage from './pages/Project';

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
  return (
    <RouterProvider router={routers} />
  )
}

export default App
