import React from 'react';
import { useTranslation } from 'react-i18next';
import stripeLogo from '../assets/images/stripe-logo.png';

import btcQR from '../assets/images/BTC_wallet_qr_resized.png';
import ethQR from '../assets/images/ETH_wallet_qr_resized.png';
import solQR from '../assets/images/SOL_wallet_qr_resized.png';

const Donate = () => {
  const { t } = useTranslation();

  // Funzione sicura per copiare negli appunti
  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => alert('Indirizzo copiato negli appunti!'))
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-1000px';
    textArea.style.left = '-1000px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const success = document.execCommand('copy');
      if (success) {
        alert('Indirizzo copiato negli appunti!');
      } else {
        alert('Errore nella copia. Copia manualmente.');
      }
    } catch (err) {
      alert('Copia non supportata dal browser.');
    }
    document.body.removeChild(textArea);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Titolo principale */}
      <h1 style={{ color: '#00ccff', fontSize: '2.5rem' }}>
        {t('donate_title')}
      </h1>

      {/* Testo descrizione donazione */}
      <p
        style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '1.5rem auto',
          lineHeight: '1.8',
          color: '#ffffff',
        }}
        dangerouslySetInnerHTML={{ __html: t('donate_text') }}
      />

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
              backgroundColor: '#00ccff',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s',
            }}
          >
            Dona ora con Stripe
          </button>
        </a>
        <div style={{ marginTop: '1rem' }}>
          <img
            src={stripeLogo}
            alt="Stripe"
            style={{ width: '120px', margin: '0 auto', display: 'block' }}
          />
        </div>
      </div>

      {/* Sezione criptovalute */}
      <h2 style={{ color: '#00ccff', marginTop: '3rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
        Donazioni anonime in criptovaluta
      </h2>
      <p
        style={{
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '1rem auto',
          lineHeight: '1.8',
          color: '#ffffff',
        }}
      >
        Per chi desidera supportare <strong style={{ color: '#00ccff' }}>SOUL ROCK</strong> in forma
        anonima o decentralizzata, è possibile donare direttamente tramite criptovalute. Nessun dato personale
        è richiesto e la transazione è registrata solo sulla blockchain.
      </p>

      {/* Blocchi Crypto */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
        }}
      >
        {/* BTC */}
        <div style={{ textAlign: 'center', maxWidth: '220px' }}>
          <h3 style={{ color: '#00ccff', fontWeight: 'bold', textTransform: 'uppercase' }}>BTC</h3>
          <img src={btcQR} alt="QR BTC" style={{ width: '150px', height: '150px' }} />
          <button
            onClick={() => copyToClipboard('3KXbnziZABPwtNeD8pvPdSKTL1ZnpbtL2V')}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              borderRadius: '6px',
              backgroundColor: '#00ccff',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Copia indirizzo
          </button>
        </div>

        {/* ETH */}
        <div style={{ textAlign: 'center', maxWidth: '220px' }}>
          <h3 style={{ color: '#00ccff', fontWeight: 'bold', textTransform: 'uppercase' }}>ETH</h3>
          <img src={ethQR} alt="QR ETH" style={{ width: '150px', height: '150px' }} />
          <button
            onClick={() => copyToClipboard('0x18A515e95ae79D25A06C3b75B1EFeE2049cEfC72')}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              borderRadius: '6px',
              backgroundColor: '#00ccff',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Copia indirizzo
          </button>
        </div>

        {/* SOL */}
        <div style={{ textAlign: 'center', maxWidth: '220px' }}>
          <h3 style={{ color: '#00ccff', fontWeight: 'bold', textTransform: 'uppercase' }}>SOL</h3>
          <img src={solQR} alt="QR SOL" style={{ width: '150px', height: '150px' }} />
          <button
            onClick={() => copyToClipboard('388xenffgiuHxkWBisWN3MqUbt7KSKVV7YR9cNxJScSa')}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              borderRadius: '6px',
              backgroundColor: '#00ccff',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Copia indirizzo
          </button>
        </div>
      </div>

      <p
        style={{
          fontSize: '1rem',
          maxWidth: '800px',
          margin: '2rem auto 0',
          lineHeight: '1.8',
          color: '#ffffff',
        }}
      >
        Una volta completata la donazione, puoi (facoltativamente) scriverci per ricevere un ringraziamento
        simbolico. In alternativa, puoi rimanere completamente anonimo.
      </p>
    </div>
  );
};

export default Donate;
