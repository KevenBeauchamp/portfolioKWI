import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'https://kevenbeauchamp.github.io/portfolioKWI/index.css'
import App from 'https://kevenbeauchamp.github.io/portfolioKWI/App.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
