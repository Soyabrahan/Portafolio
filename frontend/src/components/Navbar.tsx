"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Abrahan Portafolio</div>
      <div className="navbar-elements">
        <ul className="navbar-links hidden md:flex">
          <li>
            <a href="#inicio" className="navbar-link-item">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobremi" className="navbar-link-item">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#proyectos" className="navbar-link-item">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="navbar-link-item">
              Contacto
            </a>
          </li>
        </ul>
        <a
          href="/Curriculum AbrahanRamirez28726764.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Currículum
        </a>
        <button className="md:hidden navbar-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <ul className="mobile-menu-links">
            <li>
              <a
                href="#inicio"
                className="mobile-menu-link-item"
                onClick={toggleMobileMenu}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#sobremi"
                className="mobile-menu-link-item"
                onClick={toggleMobileMenu}
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="mobile-menu-link-item"
                onClick={toggleMobileMenu}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="mobile-menu-link-item"
                onClick={toggleMobileMenu}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
