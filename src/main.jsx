import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col min-h-screen bg-[#1e1e1e] text-white'>
    <Header/>
    <App />
    </div>
  </StrictMode>,
)
