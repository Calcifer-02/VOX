import "./VRContent.css";

function VRContent() {
   return (
      <section className="panorama__list">
         <div className="panorama__item">
            <h2 className="panorama__title">360° EXTERIOR PANORAMA 1</h2>
            <div className="panorama__container">
               <iframe
                  id="kuula-player"
                  src="https://kuula.co/share/h496p?autoplay=1&logo=0&info=0&fs=1&vr=0&thumbs=0"
                  title="360° Exterior Panorama 1"
                  width="100%"
                  height="100%"
                  allow="vr"
                  allowFullScreen
                  frameBorder="0"
               ></iframe>
            </div>
         </div>
         <div className="panorama__item">
            <h2 className="panorama__title">360° EXTERIOR PANORAMA 2</h2>
            <div className="panorama__container">
               <iframe
                  id="kuula-player"
                  src="https://kuula.co/share/h467m?autoplay=1&logo=0&info=0&fs=1&vr=0&thumbs=0"
                  title="360° Exterior Panorama 2"
                  width="100%"
                  height="100%"
                  allow="vr"
                  allowFullScreen
                  frameBorder="0"
               ></iframe>
            </div>
         </div>
         <div className="panorama__item">
            <h2 className="panorama__title">360° EXTERIOR PANORAMA 3</h2>
            <div className="panorama__container">
               <iframe
                  id="kuula-player"
                  src="https://kuula.co/share/h4kd6?autoplay=1&logo=0&info=0&fs=1&vr=0&thumbs=0"
                  title="360° Exterior Panorama 3"
                  width="100%"
                  height="100%"
                  allow="vr"
                  allowFullScreen
                  frameBorder="0"
               ></iframe>
            </div>
         </div>
      </section>
   );
}
export default VRContent;
