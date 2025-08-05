import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)).map((src) => ({ src }));

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#00ccff', marginBottom: '2rem' }}>Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`image-${idx}`}
            onClick={() => openLightbox(idx)}
            style={{
              width: '100%',
              height: 'auto',
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
          />
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={index}
          on={{
            view: ({ index: i }) => setIndex(i),
          }}
        />
      )}
    </div>
  );
};

export default Gallery;
