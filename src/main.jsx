import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './NormalCss_import/App.jsx'
import AppAll from './AppAll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppAll />
  </StrictMode>,
)
