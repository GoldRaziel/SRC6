import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Investors from './pages/Investors';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <nav style={{ background: '#111', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" style={{ marginRight: 15 }}>{t('home')}</Link>
          <Link to="/idea" style={{ marginRight: 15 }}>{t('about')}</Link>
          <Link to="/investors" style={{ marginRight: 15 }}>{t('investors')}</Link>
          <Link to="/gallery" style={{ marginRight: 15 }}>{t('gallery')}</Link>
          <Link to="/donate" style={{ marginRight: 15 }}>{t('donate')}</Link>
          <Link to="/contact">{t('contact')}</Link>
        </div>
        <div>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('it')}>IT</button>
          <button onClick={() => changeLanguage('ar')}>AR</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;