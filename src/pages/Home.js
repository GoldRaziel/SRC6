import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../assets/images/1. Esterno notte.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Immagine grande */}
      <img
        src={image}
        alt="Soul Rock Exterior"
        style={{ maxWidth: '100%', borderRadius: '10px' }}
      />

      {/* Titolo in tre righe */}
      <h1 style={{ fontSize: '2.5rem', marginTop: '2rem', color: '#00ccff', lineHeight: '1.5' }}>
        Benvenuti al<br />
        SOUL ROCK<br />
        MUSEUM RESTAURANT
      </h1>

      {/* Frase */}
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
