'use client';

import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className="container">
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            Build<span>Sync</span>
          </div>
          
          <div className={styles.menu}>
            <a href="#funcionalidades" className={styles.navLink}>Funcionalidades</a>
            <a href="#beneficios" className={styles.navLink}>Benefícios</a>
            <a href="#depoimentos" className={styles.navLink}>Depoimentos</a>
          </div>

          <div className={styles.actions}>
            <button className={styles.ctaButton}>
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
