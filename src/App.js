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
    setMenuOpen(false); // chiude il menu su mobile
  };

  return (
    <Router>
      {/* NAVBAR responsive */}
      <nav className="navbar">
        {/* Hamburger solo su mobile */}
        <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Menu di navigazione */}
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
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

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* STILE RESPONSIVE */}
      <style>
        {`
          .navbar {
            background: #111;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 1rem;
            flex-wrap: wrap;
            position: relative;
          }

          .navbar-hamburger {
            display: none;
            font-size: 2rem;
            color: #00ccff;
            cursor: pointer;
          }

          .navbar-links {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
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

          @media (max-width: 768px) {
            .navbar-hamburger {
              display: block;
              position: absolute;
              top: 1.2rem;
              right: 1rem;
            }

            .navbar-links {
              display: none;
              flex-direction: column;
              width: 100%;
              margin-top: 3rem;
              background: #111;
              padding: 1rem 0;
              position: absolute;
              top: 60px;
              left: 0;
              z-index: 999;
            }

            .navbar-links.open {
              display: flex;
            }

            .nav-button {
              width: 100%;
              text-align: center;
              padding: 0.75rem 0;
            }
          }
        `}
      </style>
    </Router>
  );
}

export default App;
