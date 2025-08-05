import React from 'react';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('donate_title')}</h1>
      <p>{t('donate_text')}</p>
      <div style={{ marginTop: '1rem' }}>
        <a href="https://www.paypal.com/donate" target="_blank" rel="noreferrer">
          <button>PayPal</button>
        </a>
        <a href="https://www.stripe.com/donate" target="_blank" rel="noreferrer">
          <button>Stripe</button>
        </a>
      </div>
    </div>
  );
};

export default Donate;