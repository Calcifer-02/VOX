import React from "react";
import "./ServicesContent.css";
import InfiniteTicker from "./InfiniteTicker/InfiniteTicker.jsx";
import services from "./Services.js";
function ServicesContent() {
   return (
      <section className="services__main">
         <InfiniteTicker />
         <div className="services">
            {services.map((service) => (
               <div className="service__item" key={service.id}>
                  <a href={service.link} className="service-link">
                     {service.title}
                  </a>
                  <h2 className="service__item_text">{service.text}</h2>
               </div>
            ))}
         </div>
      </section>
   );
}

export default ServicesContent;
