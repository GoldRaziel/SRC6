import React from 'react';
import { useTranslation } from 'react-i18next';
import freddy from '../assets/images/freddy-ologramma.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Titolo */}
      <h1 style={{ fontSize: '2.5rem', color: '#00ccff' }}>
        {t('about_title')}
      </h1>

      {/* Testo con HTML inline dal translation.json */}
      <p
        style={{
          fontSize: '1.1rem',
          maxWidth: '900px',
          margin: '1.5rem auto',
          lineHeight: '1.8',
          textAlign: 'center'
        }}
        dangerouslySetInnerHTML={{ __html: t('about_text') }}
      />

      {/* Immagine Freddy ologramma */}
      <img
        src={freddy}
        alt="Freddy Mercury Ologramma"
        style={{
          maxWidth: '400px',
          marginTop: '2rem',
          borderRadius: '10px',
          boxShadow: '0 0 20px #00ccff'
        }}
      />
    </div>
  );
};

export default About;
