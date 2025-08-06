import React from 'react';
import { useTranslation } from 'react-i18next';

const Ethics = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div
      style={{
        padding: '2rem',
        textAlign: isRTL ? 'right' : 'justify',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <h1 style={{ color: '#00ccff', fontSize: '2.2rem', marginBottom: '1.5rem' }}>
        {t('ethics_title')}
      </h1>

      <div
        style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff', maxWidth: '900px', margin: '0 auto' }}
        dangerouslySetInnerHTML={{ __html: t('ethics_text') }}
      />
    </div>
  );
};

export default Ethics;
