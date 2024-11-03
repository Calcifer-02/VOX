import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
   return (
      <header className="header">
         <div className="logo">
            <NavLink to="/">
               <img src="public/images/logo.svg" alt="Logo" />
            </NavLink>
         </div>
         <nav className="nav">
            <ul className="nav__list">
               <li className="nav__item">
                  <NavLink
                     to="/works"
                     className={({ isActive }) =>
                        isActive ? "nav__link active" : "nav__link"
                     }
                  >
                     WORKS
                  </NavLink>
               </li>
               <li className="nav__item">
                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        isActive ? "nav__link active" : "nav__link"
                     }
                  >
                     ABOUT
                  </NavLink>
               </li>
               <li className="nav__item">
                  <NavLink
                     to="/services"
                     className={({ isActive }) =>
                        isActive ? "nav__link active" : "nav__link"
                     }
                  >
                     SERVICES
                  </NavLink>
               </li>
               <li className="nav__item">
                  <NavLink
                     to="/vr"
                     className={({ isActive }) =>
                        isActive ? "nav__link active" : "nav__link"
                     }
                  >
                     VR
                  </NavLink>
               </li>
               <li className="nav__item">
                  <NavLink
                     to="/animations"
                     className={({ isActive }) =>
                        isActive ? "nav__link active" : "nav__link"
                     }
                  >
                     ANIMATIONS
                  </NavLink>
               </li>
               <li className="nav__item">
                  <NavLink
                     to="/contacts"
                     className={({ isActive }) =>
                        isActive ? "nav__link active" : "nav__link"
                     }
                  >
                     CONTACTS
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
