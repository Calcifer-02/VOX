import React from "react";
import "./AnimationsContent.css";

function AnimationsContent() {
   return (
      <section className="animations__list">
         <div className="animations__item">
            <h2 className="animations__title">ANIMATION 1</h2>
            <div className="animations__container">
               <div className="animation-frame">
                  <div id="player1"></div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default AnimationsContent;
