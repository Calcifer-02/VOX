function onYouTubeIframeAPIReady() {
   // Создание первого плеера
   new YT.Player("player1", {
      videoId: "2upuBiEiXDk",
      width: "100%",
      height: "400", // Задайте нужную высоту
      playerVars: {
         controls: 1,
         autoplay: 0,
         rel: 0, // Отключение рекомендаций других видео
         showinfo: 0,
      },
   });
}
