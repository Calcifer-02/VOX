// Works.jsx
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Works.css";
import WorksGallery from "./WorksGallary/WorksGallary";

function Works() {
   return (
      <div>
         <Header />
         <WorksGallery />
         <Footer />
      </div>
   );
}

export default Works;
