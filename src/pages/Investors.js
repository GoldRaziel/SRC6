import React from 'react';
import { useTranslation } from 'react-i18next';

const Investors = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('investors_title')}</h1>
      <p>{t('investors_text')}</p>
    </div>
  );
};

export default Investors;