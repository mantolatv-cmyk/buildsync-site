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
          <p className={styles.description}>
            A inteligência definitiva para gestão de obras e controle de KPIs imobiliários. 
            Transforme seus projetos em ativos lucrativos com visão executiva e rentabilidade garantida.
          </p>
        </div>
        
        <div className={styles.sitemap}>
          <div className={styles.column}>
            <h4>Produto</h4>
            <a href="#">Dashboard</a>
            <a href="#">Integrações</a>
            <a href="#">Relatórios</a>
            <a href="#">Mobile App</a>
          </div>
          <div className={styles.column}>
            <h4>Soluções</h4>
            <a href="#">Pequenas Construtoras</a>
            <a href="#">Investidores</a>
            <a href="#">Residencial de Luxo</a>
            <a href="#">Gestão de ROI</a>
          </div>
          <div className={styles.column}>
            <h4>Empresa</h4>
            <a href="#">Sobre Nós</a>
            <a href="#">Carreiras</a>
            <a href="#">Blog Executivo</a>
            <a href="#">Contato</a>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Compliance</a>
            <a href="#">Segurança</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.logo}>
            Build<span>Sync</span>
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
