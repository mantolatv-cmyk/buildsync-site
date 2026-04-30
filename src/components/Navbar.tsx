'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          Build<span>Sync</span>
        </div>
        
        <div className={styles.menu}>
          <a href="#beneficios" className={styles.navLink}>Benefícios</a>
          <a href="#recursos" className={styles.navLink}>Recursos</a>
          <a href="#depoimentos" className={styles.navLink}>Depoimentos</a>
        </div>

        <div className={styles.actions}>
          <button className={styles.ctaButton}>
            Acesso Exclusivo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
