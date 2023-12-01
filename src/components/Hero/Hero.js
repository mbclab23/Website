'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Fungsi untuk menggeser slide ke gambar berikutnya
  const nextSlide = () => {
    const newIndex = currentIndex === 3 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Efek samping untuk mengatur interval geser slide setiap beberapa detik
  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Ganti angka ini dengan interval yang diinginkan (dalam milidetik)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div>
    
    <div className={styles.container}>
    <h1 className={styles.judul1}>We Attack</h1>
    <h1 className={styles.judul2}>We Protect</h1>
      <div className={styles.sliderWrapper} ref={sliderRef}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Menggeser gambar berdasarkan indeks
            transition: 'transform 0.5s ease-in-out', // Efek transisi
          }}
        >
          <img src='/image/hero/Rectangle 30.png' alt='Slide 1' />
          <img src='/image/hero/Rectangle 31.png' alt='Slide 1' />
          <img src='/image/hero/Rectangle 32.png' alt='Slide 1' />
          <img src='/image/hero/Rectangle 33.png' alt='Slide 1' />
          <img src='/image/hero/Rectangle 34.png' alt='Slide 1' />
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Hero;
