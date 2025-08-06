import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/LOGO.png'; // assicurati che il file esista

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Titolo */}
      <h1 style={{ color: '#00ccff', fontSize: '2.5rem', marginBottom: '2rem' }}>
        {t('contact_title')}
      </h1>

      {/* Solo email */}
      <p style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '3rem' }}>
        info.soulrockcafe@gmail.com
      </p>

      {/* Logo centrato */}
      <img
        src={logo}
        alt="Soul Rock Cafe Logo"
        style={{ width: '220px', maxWidth: '80%', margin: '0 auto', display: 'block' }}
      />
    </div>
  );
};

export default Contact;
