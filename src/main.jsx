import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authapp from './another-eg/auapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Authapp/> */}
  </StrictMode>,
)
