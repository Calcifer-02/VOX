import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
const ImageSlider = () => {
   const settings = {
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
   };

   return (
      <div className="slider-container">
         <Slider {...settings}>
            <div>
               <img src="./images/project_1.jpg" alt="Project 1" />
            </div>
            <div>
               <img src="./images/project_2.jpg" alt="Project 2" />
            </div>
            <div>
               <img src="./images/project_3.jpg" alt="Project 3" />
            </div>
            <div>
               <img src="./images/project_4.jpg" alt="Project 4" />
            </div>
         </Slider>
      </div>
   );
};

export default ImageSlider;
