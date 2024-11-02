// WorksGallery.jsx
import React from "react";
import { images } from "../Works.js";
import "./WorksGallary.css";

function WorksGallery() {
   return (
      <div>
         <section className="works-gallery">
            {images.map((image, index) => (
               <div key={index} className="works-item">
                  <img src={image} alt={`work-${index}`} />
               </div>
            ))}
         </section>
         <div className="in-progress">
            <p>in progress/</p>
         </div>
      </div>
   );
}

export default WorksGallery;
