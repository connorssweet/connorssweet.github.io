import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/Navbar.css';
import { ScrollToSection } from '../util/ScrollToSection';
import sectionsData from '../data/sections.json';
import { UseIsMobile } from '../util/UseIsMobile';

const Navbar: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isMobile = UseIsMobile();

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleMenuClick = (section: string) => {
    ScrollToSection(section);
    toggleMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('.home');
      if (homeSection) {
        setIsNavbarVisible(homeSection.getBoundingClientRect().bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      {isMobile ? (
        <>
          <nav className="nav nav-mobile">
            <div className="navbar-name">Connor Sweet</div>
            <button className="hamburger-button" onClick={toggleMenu}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            {isMenuOpen && (
              <div
                className={`dropdown-menu ${isClosing ? 'closing' : 'open'}`}
              >
                {sectionsData.map((section) => (
                  <Button
                    label={section.label}
                    key={section.id}
                    onClick={() => handleMenuClick(section.id)}
                  />
                ))}
              </div>
            )}
          </nav>
        </>
      ) : (
        <nav className={`nav nav-desktop ${isNavbarVisible ? 'visible' : ''}`}>
          {sectionsData.map((section) => (
            <Button
              label={section.label}
              key={section.id}
              onClick={() => ScrollToSection(section.id)}
            />
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
