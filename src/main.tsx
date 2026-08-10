import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/homePage.tsx'
import "./colors/variables.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
