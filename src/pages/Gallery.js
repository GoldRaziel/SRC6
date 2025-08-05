import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#00ccff', marginBottom: '2rem' }}>Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            onClick={() => openLightbox(index)}
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

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
