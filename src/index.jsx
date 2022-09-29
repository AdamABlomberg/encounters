import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Encounters from './Encounters.jsx'
import Predictor from './Predictor.jsx'
const App = () => {
return (
  <div>
    {/* <h1>Musky Manager</h1> */}
    <Encounters/>
    <Predictor/>
  </div>
  );
}
root.render(<App />);