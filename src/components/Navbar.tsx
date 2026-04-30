'use client';

import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} ${styles.scrolled} glass`}>
      <div className="container">
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            Build<span>Sync</span>
          </div>
          
          <div className={styles.links}>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#depoimentos">Depoimentos</a>
          </div>

          <button className={styles.ctaButton}>
            Começar Agora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
