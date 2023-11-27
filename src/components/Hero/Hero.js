'use client'

import React, { useState } from 'react';
import styles from './Hero.module.css';

const Hero = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const index = (currentIndex - 1 + destinations.length) % destinations.length;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const index = (currentIndex + 1) % destinations.length;
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <button onClick={goToPrevious}>Previous</button>
      <div className={styles.cards}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.active : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={destination.image} alt={destination.destination} />
            <div className={styles['card-content']}>
              <h3>{destination.destination}</h3>
              <p>{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default Hero;
