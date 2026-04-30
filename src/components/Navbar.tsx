'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          Build<span>Sync</span>
        </div>
        
        <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <a href="#como-funciona" className={styles.navLink} onClick={() => setIsOpen(false)}>Como Funciona</a>
          <a href="#whatsapp" className={styles.navLink} onClick={() => setIsOpen(false)}>WhatsApp AI</a>
          <a href="#roi-calculator" className={styles.navLink} onClick={() => setIsOpen(false)}>Calculadora ROI</a>
          <a href="#beneficios" className={styles.navLink} onClick={() => setIsOpen(false)}>Benefícios</a>
        </div>

        <div className={styles.actions}>
          <button className={styles.ctaButton}>
            Começar Agora
          </button>
          <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
