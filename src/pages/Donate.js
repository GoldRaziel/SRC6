import React from 'react';
import { useTranslation } from 'react-i18next';
import stripeLogo from '../assets/images/stripe-logo.png';

import btcQR from '../assets/images/BTC_wallet_qr_resized.png';
import ethQR from '../assets/images/ETH_wallet_qr_resized.png';
import solQR from '../assets/images/SOL_wallet_qr_resized.png';

const Donate = () => {
  const { t } = useTranslation();

  // --- Clipboard helpers -----------------------------------------------------
  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
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
  // ---------------------------------------------------------------------------

  // TODO: sostituisci con i tuoi Stripe Payment Links (1 / 5 / 10 USD)
  const LINK_1USD = '#PAY_1USD';
  const LINK_5USD = '#PAY_5USD';
  const LINK_10USD = '#PAY_10USD';

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* TITOLO PRINCIPALE */}
      <h1
        style={{
          color: '#00ccff',
          fontSize: '2.6rem',
          lineHeight: 1.1,
          marginBottom: '0.25rem'
        }}
      >
        {t('legends_title')}
      </h1>

      {/* SOTTOTITOLO FISSO (azzurro, grassetto) */}
      <h2
        style={{
          color: '#00ccff',
          fontWeight: 'bold',
          fontSize: '1.35rem',
          marginTop: '0.2rem',
          marginBottom: '0.8rem'
        }}
      >
        {t('legends_sub_fixed')}
      </h2>

      {/* INTRO OPZIONI */}
      <p
        style={{
          fontSize: '1.2rem',
          maxWidth: '850px',
          margin: '0.2rem auto 1.25rem',
          lineHeight: '1.7',
          color: '#ffffff'
        }}
        dangerouslySetInnerHTML={{ __html: t('legends_subtitle_multi') }}
      />

      {/* GRID: 3 colonne con altezza uniforme */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.2rem',
          maxWidth: '1080px',
          margin: '1.25rem auto 0'
        }}
      >
        {/* --- CARD 1 USD ----------------------------------------------------- */}
        <div
          style={{
            background: '#141414',
            border: '1px solid #00ccff40',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minHeight: 400
          }}
        >
          {/* TITOLO CON HTML (andare a capo dopo importo) */}
          <h3
            style={{
              color: '#00ccff',
              margin: 0,
              lineHeight: 1.25
            }}
            dangerouslySetInnerHTML={{ __html: t('tier1_title_html') }}
          />

          {/* DESCRIZIONE con HTML (strong, em, colore) */}
          <div
            style={{
              color: '#ffffff',
              opacity: 0.95,
              lineHeight: 1.7,
              marginTop: '0.7rem'
            }}
            dangerouslySetInnerHTML={{ __html: t('tier1_desc') }}
          />

          {/* CTA fissata in basso */}
          <div style={{ marginTop: 'auto' }}>
            <a href={LINK_1USD} target="_blank" rel="noreferrer">
              <button
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  fontSize: '1.05rem',
                  borderRadius: '10px',
                  backgroundColor: '#00ccff',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginTop: '1rem'
                }}
              >
                {t('tier_pay_cta', { amount: '1 USD' })}
              </button>
            </a>

            {/* shortcut wallet → stesso link Stripe */}
            <div
              style={{
                marginTop: '0.65rem',
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <a href={LINK_1USD} target="_blank" rel="noreferrer">
                <button
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.95rem',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Apple Pay
                </button>
              </a>
              <a href={LINK_1USD} target="_blank" rel="noreferrer">
                <button
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.95rem',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Google&nbsp;Pay
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* --- CARD 5 USD ----------------------------------------------------- */}
        <div
          style={{
            background: '#141414',
            border: '1px solid #00ccff66',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minHeight: 400,
            boxShadow: '0 0 20px rgba(0,176,240,0.08)'
          }}
        >
          <h3
            style={{
              color: '#00ccff',
              margin: 0,
              lineHeight: 1.25
            }}
            dangerouslySetInnerHTML={{ __html: t('tier2_title_html') }}
          />

          <div
            style={{
              color: '#ffffff',
              opacity: 0.95,
              lineHeight: 1.7,
              marginTop: '0.7rem'
            }}
            dangerouslySetInnerHTML={{ __html: t('tier2_desc') }}
          />

          <div style={{ marginTop: 'auto' }}>
            <a href={LINK_5USD} target="_blank" rel="noreferrer">
              <button
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  fontSize: '1.05rem',
                  borderRadius: '10px',
                  backgroundColor: '#00ccff',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginTop: '1rem'
                }}
              >
                {t('tier_pay_cta', { amount: '5 USD' })}
              </button>
            </a>

            <div
              style={{
                marginTop: '0.65rem',
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <a href={LINK_5USD} target="_blank" rel="noreferrer">
                <button
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.95rem',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Apple Pay
                </button>
              </a>
              <a href={LINK_5USD} target="_blank" rel="noreferrer">
                <button
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.95rem',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Google&nbsp;Pay
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* --- CARD 10 USD ---------------------------------------------------- */}
        <div
          style={{
            background: '#141414',
            border: '1px solid #00ccff40',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minHeight: 400
          }}
        >
          <h3
            style={{
              color: '#00ccff',
              margin: 0,
              lineHeight: 1.25
            }}
            dangerouslySetInnerHTML={{ __html: t('tier3_title_html') }}
          />

          <div
            style={{
              color: '#ffffff',
              opacity: 0.95,
              lineHeight: 1.7,
              marginTop: '0.7rem'
            }}
            dangerouslySetInnerHTML={{ __html: t('tier3_desc') }}
          />

          <div style={{ marginTop: 'auto' }}>
            <a href={LINK_10USD} target="_blank" rel="noreferrer">
              <button
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem',
                  fontSize: '1.05rem',
                  borderRadius: '10px',
                  backgroundColor: '#00ccff',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginTop: '1rem'
                }}
              >
                {t('tier_pay_cta', { amount: '10 USD' })}
              </button>
            </a>

            <div
              style={{
                marginTop: '0.65rem',
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <a href={LINK_10USD} target="_blank" rel="noreferrer">
                <button
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.95rem',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Apple Pay
                </button>
              </a>
              <a href={LINK_10USD} target="_blank" rel="noreferrer">
                <button
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.95rem',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #e5e7eb',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Google&nbsp;Pay
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST STRIPE */}
      <div style={{ marginTop: '1rem' }}>
        <img
          src={stripeLogo}
          alt="Stripe"
          style={{ width: '120px', margin: '0 auto', display: 'block', opacity: 0.95 }}
        />
        <p style={{ marginTop: '0.4rem', fontSize: '0.95rem', color: '#bdeaff' }}>
          {t('legends_cta_note')}
        </p>
      </div>

      {/* SEZIONE CRYPTO */}
      <h2
        style={{
          color: '#00ccff',
          marginTop: '2.5rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.03em'
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
          color: '#ffffff'
        }}
      >
        {t('legends_crypto_text')}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1.5rem'
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
              fontWeight: 'bold'
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
              fontWeight: 'bold'
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
              fontWeight: 'bold'
            }}
          >
            {t('donate_copy_button')}
          </button>
        </div>
      </div>

      {/* PRIVACY / RICONOSCIMENTO */}
      <p
        style={{
          fontSize: '0.98rem',
          maxWidth: '860px',
          margin: '2rem auto 0',
          lineHeight: '1.7',
          color: '#ffffff'
        }}
        dangerouslySetInnerHTML={{ __html: t('legends_privacy_note_v2') }}
      />
    </div>
  );
};

export default Donate;
