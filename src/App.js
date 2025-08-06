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
    setMenuOpen(false); // chiude il menu mobile dopo cambio lingua
    // ❌ Non impostiamo RTL (su tua richiesta)
  };

  return (
    <Router>
      <nav className="navbar">
        {/* DESKTOP MENU */}
        <div className="navbar-desktop">
          <div className="nav-links">
            <Link to="/" className="nav-button">{t('home')}</Link>
            <Link to="/idea" className="nav-button">{t('about')}</Link>
            <Link to="/investors" className="nav-button">{t('investors')}</Link>
            <Link to="/gallery" className="nav-button">{t('gallery')}</Link>
            <Link to="/donate" className="nav-button">{t('donate')}</Link>
            <Link to="/contact" className="nav-button">{t('contact')}</Link>
          </div>
          <div className="nav-lang">
            <button className="nav-button" onClick={() => changeLanguage('en')}>EN</button>
            <button className="nav-button" onClick={() => changeLanguage('it')}>IT</button>
            <button className="nav-button" onClick={() => changeLanguage('ar')}>AR</button>
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="navbar-mobile">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
          {menuOpen && (
            <div className="mobile-menu">
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
          )}
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

      {/* STILE INLINE (valido per JSX e Netlify) */}
      <style>{`
        .navbar {
          background: #111;
          padding: 1rem;
        }

        .navbar-desktop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .nav-links {
          display: flex;
          gap: 10px;
        }

        .nav-lang {
          display: flex;
          gap: 10px;
        }

        .navbar-mobile {
          display: none;
        }

        .nav-button {
          background: #00ccff;
          color: #000;
          border: none;
          padding: 0.5rem 1rem;
          font-weight: bold;
          border-radius: 6px;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
        }

        .nav-button:hover {
          background: #00aacc;
        }

        @media (max-width: 768px) {
          .navbar-desktop {
            display: none;
          }

          .navbar-mobile {
            display: block;
            position: relative;
          }

          .hamburger {
            font-size: 2rem;
            color: #00ccff;
            cursor: pointer;
            text-align: right;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            background: #111;
            gap: 10px;
            padding: 1rem 0;
            margin-top: 1rem;
          }
        }
      `}</style>
    </Router>
  );
}

export default App;
