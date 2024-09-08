import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Heading from './assets/Heading/Heading.jsx'
import App from './assets/App/App.jsx'
import Footer from './assets/Footer/Footer.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heading />
    <App />
    <Footer />
  </StrictMode>,
)
