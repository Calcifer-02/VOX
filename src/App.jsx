import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works.jsx";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Animations from "./pages/Animations/Animations.jsx";
import VR from "./pages/VR/VR";
import Services from "./pages/Services/Services";
const App = () => {
   return (
      <Router basename="/VOX">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vr" element={<VR />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/contacts" element={<Contacts />} />
         </Routes>
      </Router>
   );
};

export default App;
