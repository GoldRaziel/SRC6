import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/LOGO.png'; // Assicurati che il file esista

const Contact = () => {
  const { t } = useTranslation();

  // ✅ Configura qui il numero (senza + e spazi) e il messaggio precompilato
  const waNumber = '971507146421';
  const waText = encodeURIComponent("Hello Soul Rock! I'd like more information.");

  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#eee' }}>
      {/* Titolo */}
      <h1 style={{ color: '#00ccff', fontSize: '2.5rem', marginBottom: '2rem' }}>
        {t('contact_title')}
      </h1>

      {/* Email */}
      <p style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '3rem' }}>
        info.soulrockcafe@gmail.com
      </p>

      {/* WhatsApp CTA */}
      <a
        href={`https://wa.me/${waNumber}?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: '#111',
          border: '1px solid #00B0F0',
          borderRadius: '999px',
          padding: '10px 16px',
          textDecoration: 'none',
          color: '#00B0F0',
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,176,240,0.15)',
          marginBottom: '1rem',
        }}
        aria-label="Chat on WhatsApp"
      >
        {/* Logo WhatsApp (SVG inline) */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M19.11 17.26c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.36-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02s-.48.07-.74.34c-.25.28-.97.95-.97 2.31s1 2.68 1.14 2.86c.14.18 1.97 3 4.77 4.21.67.29 1.19.46 1.6.59.67.21 1.29.18 1.77.11.54-.08 1.63-.66 1.86-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.53-.32Z"
            fill="#00B0F0"
          />
          <path
            d="M26.6 5.42A12.45 12.45 0 0 0 15.97 2C8.56 2 2.54 8.02 2.54 15.44c0 2.45.67 4.82 1.95 6.9L2 30l7.82-2.4a13 13 0 0 0 6.15 1.56c7.42 0 13.44-6.02 13.44-13.44 0-3.59-1.4-6.96-3.81-9.3Zm-10.63 21.4c-2.15 0-4.26-.58-6.11-1.69l-.44-.26-4.64 1.42 1.48-4.52-.29-.46a11.3 11.3 0 0 1-1.75-6.15c0-6.23 5.07-11.3 11.3-11.3 3.02 0 5.85 1.18 7.98 3.31a11.21 11.21 0 0 1 3.32 7.98c0 6.23-5.07 11.3-11.3 11.3Z"
            fill="#00B0F0"
          />
        </svg>

        <span>WhatsApp</span>
        <span style={{ opacity: 0.85 }}>+{waNumber}</span>
      </a>

      <p style={{ marginTop: '8px', opacity: 0.8, fontSize: '0.95rem' }}>
        {t('contact_whatsapp_hint') || 'Rispondiamo su WhatsApp tutti i giorni.'}
      </p>

      {/* Logo centrato */}
      <img
        src={logo}
        alt="Soul Rock Cafe Logo"
        style={{
          width: '220px',
          maxWidth: '80%',
          margin: '2rem auto 0',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Contact;
