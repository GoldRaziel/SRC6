import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import immagini (escludendo LOGO.png)
import img1 from '../assets/images/1. Esterno notte.png';
import img2 from '../assets/images/2. Reception.png';
import img3 from '../assets/images/3. Attesa reception.png';
import img4 from '../assets/images/4. Sala ED209.png';
import img5 from '../assets/images/4. Sala Robocop.png';
import img6 from '../assets/images/5. Sala Cocktail Michael Jackson.png';
import img7 from '../assets/images/6. Bancone Birra T800 Skeleton.png';
import img8 from '../assets/images/7. Cucina a Vista.png';
import img9 from '../assets/images/8. Cucina Hamburger.png';
import img10 from '../assets/images/9. Parete in Jeans.png';
import img11 from '../assets/images/10. Shop Soul Rock.png';
import img12 from '../assets/images/freddy-ologramma.png';

// Array delle immagini da passare al lightbox
const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 }
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (idx) => {
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
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={`img-${idx}`}
            onClick={() => handleClick(idx)}
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
          on={{ view: ({ index }) => setIndex(index) }}
        />
      )}
    </div>
  );
};

export default Gallery;
