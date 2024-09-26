import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import logo from "./5.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu(); // Ferme le menu après avoir cliqué sur un lien
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";

    return (
      <ul className={listClassName}>
        <li>
          <button className={linkClassName} onClick={() => handleScroll('Slider')}>
            Home
          </button>
        </li>
        <li>
          <button className={linkClassName} onClick={() => handleScroll('about')}>
            About
          </button>
        </li>
        <li>
          <button className={linkClassName} onClick={() => handleScroll('best-services')}>
            Services
          </button>
        </li>
        <li>
          <button className={linkClassName} onClick={() => handleScroll('guarantee')}>
            Guarantee
          </button>
        </li>
        <li>
          <button className={linkClassName} onClick={() => handleScroll('advantages')}>
            Advantages
          </button>
        </li>
        <li>
          <button className={linkClassName} onClick={() => handleScroll('contact')}>
            Contact
          </button>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src={logo} alt="logo" className="logo" />
        </a>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default Navbar;
