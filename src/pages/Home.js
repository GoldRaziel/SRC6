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

      {/* Titolo SOUL ROCK */}
      <div style={{ marginTop: '2rem', lineHeight: '1.5' }}>
        <div style={{ fontSize: '4.32rem', fontWeight: 'bold', color: '#00ccff' }}>
          SOUL ROCK
        </div>
        <div style={{ fontSize: '2.25rem', color: '#00ccff' }}>
          MUSEUM RESTAURANT
        </div>
      </div>

      {/* Frase introduttiva */}
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', marginTop: '1rem', color: '#ffffff' }}>
        {t('home_text')}
      </p>

      {/* Pulsanti (se vorrai aggiungerne altri in futuro) */}
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Nessun tasto per ora */}
      </div>
    </div>
  );
};

export default Home;
