import React from 'react';
import { useTranslation } from 'react-i18next';
import mainImage from '../assets/images/1. Esterno notte.png';
import logo from '../assets/images/soulrock-logo.png'; // nuovo logo fornito

const Home = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Immagine grande */}
      <img src={mainImage} alt="Soul Rock Exterior" style={{ maxWidth: '100%', borderRadius: '10px' }} />

      {/* Titolo + Logo */}
      <h1 style={{ fontSize: '2.5rem', marginTop: '2rem' }}>
        Benvenuti al
        <br />
        <img
          src={logo}
          alt="Soul Rock Logo"
          style={{ maxWidth: '300px', marginTop: '10px' }}
        />
      </h1>

      {/* Testo descrittivo */}
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
        {t('home_text')}
      </p>

      {/* Pulsanti */}
      <div style={{ marginTop: '2rem' }}>
        <a href="/idea"><button>{t('home_cta_discover')}</button></a>
        <a href="/donate"><button>{t('home_cta_donate')}</button></a>
      </div>
    </div>
  );
};

export default Home;
