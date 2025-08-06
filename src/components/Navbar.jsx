import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // solo se usi react-router
import './Navbar.css'; // stile separato o inline, vedi sotto

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // link base
  const menuLinks = [
    { path: '/idea', label: 'Chi siamo' },
    { path: '/gallery', label: 'Galleria' },
    { path: '/donate', label: 'Dona' },
    { path: '/contact', label: 'Contatti' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo o nome */}
        <a href="/" className="navbar-logo">SOUL ROCK</a>

        {/* Pulsante hamburger solo su mobile */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Menu desktop */}
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          {menuLinks.map((link) => (
            <a key={link.path} href={link.path} className="menu-item">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
