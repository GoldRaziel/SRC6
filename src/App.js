import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery'; // ✅ CORRETTO
import Investors from './pages/Investors';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import './i18n';
import { useTranslation } from 'react-i18next';
import './index.css';

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <nav
        style={{
          background: '#111',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
        <div>
          <Link to="/" className="nav-button">{t('home')}</Link>
          <Link to="/idea" className="nav-button">{t('about')}</Link>
          <Link to="/investors" className="nav-button">{t('investors')}</Link>
          <Link to="/gallery" className="nav-button">{t('gallery')}</Link>
          <Link to="/donate" className="nav-button">{t('donate')}</Link>
          <Link to="/contact" className="nav-button">{t('contact')}</Link>
        </div>
        <div>
          <button className="nav-button" onClick={() => changeLanguage('en')}>EN</button>
          <button className="nav-button" onClick={() => changeLanguage('it')}>IT</button>
          <button className="nav-button" onClick={() => changeLanguage('ar')}>AR</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} /> {/* ✅ Galleria importata correttamente */}
      </Routes>
    </Router>
  );
}

export default App;
