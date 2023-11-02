'use client'
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [left1, setLeft1] = useState(0);
  const [left2, setLeft2] = useState(0);
  const [left3, setLeft3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeft1((prevLeft) => (prevLeft + 1) % 100);
    }, 100);
    
    const interval2 = setInterval(() => {
      setLeft2((prevLeft) => (prevLeft + 1) % 100);
    }, 150); 
    
    const interval3 = setInterval(() => {
      setLeft3((prevLeft) => (prevLeft + 1) % 100);
    }, 200); 

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className={styles.runningImageContainer}>
      <div className={styles.runningImage}>
        <img
          src="/image/MBC.png"
          alt="Running Image 1"
          style={{ left: `${left1}%` }}
        />
      </div>
      <div className={styles.runningImage}>
        <img
          src="/image/MBC.png"
          alt="Running Image 1"
          style={{ left: `${left2}%` }}
        />
      </div>
      <div className={styles.runningImage}>
      <img
          src="/image/MBC.png"
          alt="Running Image 1"
          style={{ left: `${left3}%` }}
        />
      </div>
    </div>
  );
};

export default Hero;
