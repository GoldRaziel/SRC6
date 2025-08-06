import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../assets/images/1.Esterno-notte.png';

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

      {/* Titolo solo con SOUL ROCK + MUSEUM RESTAURANT */}
      <div style={{ marginTop: '2rem', lineHeight: '1.5' }}>
        <div style={{ fontSize: '3.6rem', fontWeight: 'bold', color: '#00ccff' }}>
          SOUL ROCK
        </div>
        <div style={{ fontSize: '2.25rem', color: '#00ccff' }}>
          MUSEUM RESTAURANT
        </div>
      </div>

      {/* Frase */}
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', marginTop: '1rem' }}>
        {t('home_text')}
      </p>

      {/* Pulsanti */}
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="/investors">
          <button style={{ fontSize: '1.2rem', padding: '0.5rem 1.2rem' }}>
            {t('home_cta_discover')}
          </button>
        </a>
        <a href="/donate">
          <button style={{ fontSize: '1.2rem', padding: '0.5rem 1.2rem' }}>
            {t('home_cta_donate')}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
