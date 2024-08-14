import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './NormalCss_import/App.jsx'
// import AppAll from './AppAll.jsx'
// import Sty from './Styled_Components/Sty'
// import BootsEx from "./Bootstrap/BootsEx";
// import AnimationApp from "./Animations/AnimationApp";
import AnimaApp from "./Animations_miniproject/AnimaApp";

// Bootstrap
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimaApp />
  </StrictMode>
);
