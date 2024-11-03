import React, { useEffect } from "react";
import "./AnimationsContent.css";

function AnimationsContent() {
   useEffect(() => {
      // Проверьте, загружен ли уже API, чтобы избежать повторной загрузки
      if (!window.YT) {
         window.onYouTubeIframeAPIReady = () => {
            createPlayer();
         };
      } else {
         createPlayer();
      }

      // Функция создания плеера
      function createPlayer() {
         new window.YT.Player("player1", {
            videoId: "2upuBiEiXDk",
            width: "100%",
            height: "400",
            playerVars: {
               controls: 1,
               autoplay: 0,
               rel: 0,
               showinfo: 0,
            },
         });
      }
   }, []); // Пустой массив зависимостей, чтобы этот эффект выполнился только один раз при монтировании компонента

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
