import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/1. Esterno notte.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        {t('home_title').split(' ')[0]}<br />
        <img src={logo} alt="Soul Rock Logo" style={{ maxWidth: '300px', marginTop: '10px', borderRadius: '10px' }} />
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
        {t('home_text')}
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/idea"><button>{t('home_cta_discover')}</button></a>
        <a href="/donate"><button>{t('home_cta_donate')}</button></a>
      </div>
    </div>
  );
};

export default Home;
