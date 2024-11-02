import React from "react";
import "./Footer.css";

function Footer() {
   return (
      <div className="footer">
         <div className="footer__line"></div>
         <div className="footer__content">
            <div className="footer__left">
               <p>© 2023 VOX Visual Studio</p>
               <a
                  href="https://t.me/Calcifer_02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__developer"
               >
                  Developer: Calcifer_02
                  <img
                     src="/images/telegram.png"
                     alt="Telegram"
                     className="footer__telegram-icon"
                  />
               </a>
            </div>
            <div className="footer__right">
               <p>Follow us:</p>
               <div className="footer__icons">
                  <a
                     href="https://instagram.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src="/images/instagram.png" alt="Instagram" />
                  </a>
                  <a
                     href="https://behance.net"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src="/images/behance.png" alt="Behance" />
                  </a>
                  <a
                     href="https://youtube.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src="/images/youtube.png" alt="YouTube" />
                  </a>
                  <a
                     href="https://pinterest.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src="/images/pinterest.png" alt="Pinterest" />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
