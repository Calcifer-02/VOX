import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutContent from "./AboutContent/AboutContent";
import "./About.css";

function About() {
   return (
      <div>
         <Header />
         <AboutContent />
         <Footer />
      </div>
   );
}

export default About;
