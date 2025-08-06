import React from 'react';
import { useTranslation } from 'react-i18next';
import stripeLogo from '../assets/images/stripe-logo.png'; // assicurati che questo file esista

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Titolo azzurro */}
      <h1 style={{ color: '#00ccff', fontSize: '2.5rem' }}>
        {t('donate_title')}
      </h1>

      {/* Frase emozionale */}
      <p
        style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '1.5rem auto',
          lineHeight: '1.8',
        }}
      >
        Unisciti a noi nella creazione di un luogo unico al mondo, dove le emozioni
        del passato tornano a vivere tra musica, arte e tecnologia. Non rimanere
        spettatore: <strong>entra nella storia di un progetto che farà parlare di sé in tutto il mondo.</strong>
        <br /><br />
        Puoi dare il tuo contributo in tutta tranquillità e sicurezza, attraverso il servizio Stripe.
      </p>

      {/* Bottone Stripe */}
      <div style={{ marginTop: '2rem' }}>
        <a
          href="https://donate.stripe.com/aFafZi6HZcn76m8fHJfjG01"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              borderRadius: '8px',
              backgroundColor: '#6772e5',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            Dona ora con Stripe
          </button>
        </a>

        {/* Logo Stripe */}
        <div style={{ marginTop: '1rem' }}>
          <img
            src={stripeLogo}
            alt="Stripe"
            style={{ width: '120px', margin: '0 auto', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Donate;
