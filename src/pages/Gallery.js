import React, { useState } from 'react';
import './Gallery.css';

import img1 from '../assets/images/1.Esterno-notte.png';
import img2 from '../assets/images/2.Reception.png';
import img3 from '../assets/images/3.Attesa reception.png';
import img4 from '../assets/images/4.Sala-ED209.png';
import img5 from '../assets/images/5. Sala-Robocop.png';
import img6 from '../assets/images/6.SalaCocktail-Michael-Jackson.png';
import img7 from '../assets/images/7.Bancone-Birra-T800.png';
import img8 from '../assets/images/8.Cucina-Vista.png';
import img9 from '../assets/images/9.Cucina-Hamburger.png';
import img10 from '../assets/images/10.Parete-Jeans.png';
import img11 from '../assets/images/11.Shop-Soul-Rock.png';
import img12 from '../assets/images/12.Ologramma-Freddie.png';

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`gallery-${index + 1}`}
            className="gallery-image"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="fullscreen" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
