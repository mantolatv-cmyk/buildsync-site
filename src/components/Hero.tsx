'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <Image 
          src="/assets/hero-bg.png" 
          alt="Luxury Office Background" 
          fill
          priority
          className={styles.heroBg}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className="animate-fade-in">
            O Controle Executivo da Sua Obra, <br />
            <span>Agora em Suas Mãos.</span>
          </h1>
          <p className="animate-fade-in">
            Transforme a gestão do seu projeto de construção com o dashboard definitivo. 
            Do capital total investido ao ROI projetado, o BuildSync traz previsibilidade 
            de alto padrão para pequenos construtores e projetos residenciais exclusivos.
          </p>
          <div className={`${styles.ctaWrapper} animate-fade-in`}>
            <button className={styles.mainCta}>
              Iniciar Minha Gestão Premium
            </button>
          </div>
        </div>

        <div className={`${styles.visualContent} float-slow`}>
          <div className={styles.mockupWrapper}>
            <Image 
              src="/assets/dashboard-mockup.png" 
              alt="BuildSync Dashboard Mockup" 
              width={700}
              height={500}
              className={styles.mockup}
            />
            <div className={styles.glowEffect}></div>
            
            {/* Floating Badges */}
            <div className={`${styles.floatingBadge} ${styles.badge1} glass`}>
              <div className="badge badge-green">ROI +14.2%</div>
            </div>
            <div className={`${styles.floatingBadge} ${styles.badge2} glass`}>
              <div className="badge badge-blue">Custo m²: R$ 4.2k</div>
            </div>
            <div className={`${styles.floatingBadge} ${styles.badge3} glass`}>
              <div className="badge badge-blue">Status: No Prazo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
