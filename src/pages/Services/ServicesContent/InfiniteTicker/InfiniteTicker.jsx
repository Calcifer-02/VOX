import React from "react";
import { HorizontalTicker } from "react-infinite-ticker";

function InfiniteTicker() {
   return (
      <div>
         <div className="marquee">
            <div className="marquee__inner">
               <HorizontalTicker duration={20000}>
                  <span className="marquee__text">
                     SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
                     SERVICES SERVICES
                     <br />
                  </span>
               </HorizontalTicker>
            </div>
         </div>
      </div>
   );
}

export default InfiniteTicker;
