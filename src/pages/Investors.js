import React from 'react';
import { useTranslation } from 'react-i18next';

const Investors = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Titolo */}
      <h1 style={{ fontSize: '2.5rem', color: '#00ccff' }}>
        {t('investors_title')}
      </h1>

      {/* Testo con formattazione HTML */}
      <p
        style={{
          fontSize: '1.1rem',
          maxWidth: '900px',
          margin: '1.5rem auto',
          lineHeight: '1.8',
          textAlign: 'center'
        }}
        dangerouslySetInnerHTML={{ __html: t('investors_text') }}
      />
    </div>
  );
};

export default Investors;
