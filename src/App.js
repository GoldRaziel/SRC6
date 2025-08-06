import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Investors from './pages/Investors';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import './i18n';
import { useTranslation } from 'react-i18next';
import './index.css';

function App() {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false); // chiude menu dopo cambio lingua su mobile
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      {/* NAVBAR RESPONSIVE */}
      <nav
        style={{
          background: '#111',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          position: 'relative'
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ color: '#00ccff', fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'none' }}>
          SOUL ROCK
        </Link>

        {/* Hamburger (solo mobile) */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            color: '#00ccff',
            fontSize: '2rem',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          ☰
        </button>

        {/* Menu principale (desktop + mobile) */}
        <div
          className={`menu ${menuOpen ? 'open' : ''}`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <Link to="/" className="nav-button" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
          <Link to="/idea" className="nav-button" onClick={() => setMenuOpen(false)}>{t('about')}</Link>
          <Link to="/investors" className="nav-button" onClick={() => setMenuOpen(false)}>{t('investors')}</Link>
          <Link to="/gallery" className="nav-button" onClick={() => setMenuOpen(false)}>{t('gallery')}</Link>
          <Link to="/donate" className="nav-button" onClick={() => setMenuOpen(false)}>{t('donate')}</Link>
          <Link to="/contact" className="nav-button" onClick={() => setMenuOpen(false)}>{t('contact')}</Link>
          <button className="nav-button" onClick={() => changeLanguage('en')}>EN</button>
          <button className="nav-button" onClick={() => changeLanguage('it')}>IT</button>
          <button className="nav-button" onClick={() => changeLanguage('ar')}>AR</button>
        </div>
      </nav>

      {/* ROTTE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* CSS responsive */}
      <style>
        {`
          @media (max-width: 768px) {
            .hamburger {
              display: block;
            }
            .menu {
              display: ${menuOpen ? 'flex' : 'none'};
              flex-direction: column;
              background: #111;
              position: absolute;
              top: 60px;
              left: 0;
              width: 100%;
              padding: 1rem;
              z-index: 999;
            }
            .nav-button {
              width: 100%;
              padding: 0.75rem;
              text-align: center;
            }
          }
          .nav-button {
            background: none;
            border: none;
            color: white;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: none;
          }
          .nav-button:hover {
            color: #00ccff;
          }
        `}
      </style>
    </Router>
  );
}

export default App;
