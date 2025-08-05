import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('contact_title')}</h1>
      <p>{t('contact_text')}</p>
      <form style={{ marginTop: '1rem' }}>
        <input type="text" placeholder="Your name" required style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
        <input type="email" placeholder="Your email" required style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
        <textarea placeholder="Your message" required style={{ padding: '10px', width: '100%', height: '150px' }} />
        <br />
        <button type="submit">Send</button>
      </form>
      <p style={{ marginTop: '2rem' }}>Email: info.soulrockcafe@gmail.com</p>
    </div>
  );
};

export default Contact;