import React from 'react';
import { useTranslation } from 'react-i18next';

const images = [
  "1. Esterno notte.png",
  "2. Reception.png",
  "3. Attesa reception.png",
  "4. Sala ED209.png",
  "4. Sala Robocop.png",
  "5. Sala Cocktail Michael Jackson.png",
  "6. Bancone Birra T800 Skeleton.png",
  "7. Cucina a Vista.png",
  "8. Cucina Hamburger.png",
  "9. Parete in Jeans.png",
  "10. Shop Soul Rock.png",
  "Ologramma Freddie M..png"
];

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('gallery_title')}</h1>
      <p>{t('gallery_text')}</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {images.map((img, i) => (
          <a key={i} href={require(`../assets/images/${img}`)} target="_blank" rel="noreferrer">
            <img
              src={require(`../assets/images/${img}`)}
              alt={`Gallery ${i}`}
              style={{ width: '100%', borderRadius: '10px', cursor: 'zoom-in' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallery;