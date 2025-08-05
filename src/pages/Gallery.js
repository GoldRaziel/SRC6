import React, { useState } from 'react';
import './Gallery.css';

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
import img12 from '../assets/images/chatgpt-image-2025-08-02.png';

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`gallery-${idx}`}
            className="gallery-thumb"
            onClick={() => openModal(idx)}
          />
        ))}
      </div>

      {open && selectedIndex !== null && (
        <div className="lightbox-overlay" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-arrow left" onClick={showPrev}>&lt;</button>
            <img
              src={images[selectedIndex]}
              alt={`fullscreen-${selectedIndex}`}
              className="lightbox-img"
            />
            <button className="lightbox-arrow right" onClick={showNext}>&gt;</button>
            <button className="lightbox-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
