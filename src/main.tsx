import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/app.tsx'
import Notification from './shared/components/Notification.tsx'
// import './index.css'
// import App from './app/app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Notification />
  </StrictMode>,
)
