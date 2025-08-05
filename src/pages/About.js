import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('about_title')}</h1>
      <p>{t('about_text')}</p>
    </div>
  );
};

export default About;