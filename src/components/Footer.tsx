'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.ctaSection}>
          <h2>Eleve o padrão da sua gestão hoje.</h2>
          <button className={styles.finalCta}>
            Assinar BuildSync Premium
          </button>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottom}>
          <div className={styles.logo}>
            Build<span>Sync</span>
          </div>
          
          <div className={styles.links}>
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Suporte</a>
          </div>
          
          <div className={styles.copyright}>
            © 2026 BuildSync. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
