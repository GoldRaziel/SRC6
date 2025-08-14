import React from 'react';
import { useTranslation } from 'react-i18next';
import stripeLogo from '../assets/images/stripe-logo.png';

import btcQR from '../assets/images/BTC_wallet_qr_resized.png';
import ethQR from '../assets/images/ETH_wallet_qr_resized.png';
import solQR from '../assets/images/SOL_wallet_qr_resized.png';

const Donate = () => {
  const { t } = useTranslation();

  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => alert(t('donate_copy_success')))
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
      alert(success ? t('donate_copy_success') : t('donate_copy_error'));
    } catch {
      alert(t('donate_copy_unsupported'));
    }
    document.body.removeChild(textArea);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* TITOLO PRINCIPALE */}
      <h1 style={{ color: '#00ccff', fontSize: '2.6rem', marginBottom: '0.25rem' }}>
        {t('legends_title')}
      </h1>

      {/* SOTTOTITOLO */}
      <p
        style={{
          fontSize: '1.2rem',
          maxWidth: '850px',
          margin: '0.5rem auto 1.25rem',
          lineHeight: '1.7',
          color: '#ffffff',
        }}
        dangerouslySetInnerHTML={{ __html: t('legends_subtitle') }}
      />

      {/* BLOCCO CTA 1€ */}
      <div
        style={{
          background: '#111',
          border: '1px solid #00ccff33',
          borderRadius: '14px',
          padding: '1.5rem',
          maxWidth: '860px',
          margin: '1.25rem auto 0',
          boxShadow: '0 0 18px rgba(0,176,240,0.08)',
        }}
      >
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.7',
            color: '#e8f7ff',
            margin: '0 0 1rem',
          }}
          dangerouslySetInnerHTML={{ __html: t('legends_pitch') }}
        />

        {/* BOTTONE STRIPE */}
        <div style={{ marginTop: '0.5rem' }}>
          <a
            href="https://donate.stripe.com/aFafZi6HZcn76m8fHJfjG01"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                borderRadius: '10px',
                backgroundColor: '#00ccff',
                color: '#000',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: '0.25s',
              }}
            >
              {t('legends_cta_stripe')}
            </button>
          </a>

          <div style={{ marginTop: '0.75rem' }}>
            <img
              src={stripeLogo}
              alt="Stripe"
              style={{ width: '120px', margin: '0 auto', display: 'block', opacity: 0.95 }}
            />
          </div>

          {/* Micro copy sotto il bottone */}
          <p style={{ marginTop: '0.6rem', fontSize: '0.95rem', color: '#bdeaff' }}>
            {t('legends_cta_note')}
          </p>
        </div>
      </div>

      {/* SEZIONE CRYPTO (OPZIONALE/ALTERNATIVA) */}
      <h2
        style={{
          color: '#00ccff',
          marginTop: '2.5rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
        }}
      >
        {t('legends_crypto_title')}
      </h2>
      <p
        style={{
          fontSize: '1.05rem',
          maxWidth: '820px',
          margin: '0.8rem auto 0',
          lineHeight: '1.7',
          color: '#ffffff',
        }}
      >
        {t('legends_crypto_text')}
      </p>

      {/* CRYPTO BLOCKS */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1.5rem',
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
            {t('donate_copy_button')}
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
            {t('donate_copy_button')}
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
            {t('donate_copy_button')}
          </button>
        </div>
      </div>

      {/* Nota finale privacy/riconoscimento */}
      <p
        style={{
          fontSize: '0.98rem',
          maxWidth: '860px',
          margin: '2rem auto 0',
          lineHeight: '1.7',
          color: '#ffffff',
        }}
        dangerouslySetInnerHTML={{ __html: t('legends_privacy_note') }}
      />
    </div>
  );
};

export default Donate;
