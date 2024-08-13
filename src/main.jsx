import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './NormalCss_import/App.jsx'
// import AppAll from './AppAll.jsx'
import Sty from './Styled_Components/Sty'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sty />
  </StrictMode>,
)
