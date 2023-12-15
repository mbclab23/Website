'use client'

import React, { useState } from 'react';
import styles from './Kegiatan.module.css';

const Kegiatan = ({ destinations }) => {
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
    <>
        <h1 className={styles.judul}> Kegiatan</h1>
        <div className={styles.slider}> 
        <div className={styles.cards}>
        {destinations.map((destination, index) => (
          <div
          key={index}
          className={`${styles.card} ${index === currentIndex ? styles.active : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className={styles.kotak}>
            <button className={styles.geser} onClick={goToPrevious}>Previous</button>
            <img src={destination.image} alt={destination.destination} />
            <div className={styles['card-content']}>
              <h3>{destination.destination}</h3>
              <p>{destination.description}</p>
            </div>
            <button className={styles.geser} onClick={goToNext}>Next</button>
          </div>
          </div>
          ))}
      </div>
      
    </div>
    <div className={styles.button}>
      
      
      </div>
    </>
  );
};

export default Kegiatan;
