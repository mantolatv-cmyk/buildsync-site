'use client';

import React, { useState } from 'react';
import styles from './ComparisonSlider.module.css';

const ComparisonSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>A Evolução da <span>Gestão</span></h2>
          <p>O contraste entre o caos das planilhas manuais e o Comando Absoluto do BuildSync.</p>
        </div>

        <div className={styles.sliderContainer} onMouseMove={handleMove} onTouchMove={handleMove}>
          <div className={styles.beforeLayer}>
            <div className={styles.content}>
              <h3>Gestão Tradicional</h3>
              <ul>
                <li>❌ Dados desatualizados</li>
                <li>❌ Furos de orçamento</li>
                <li>❌ Incerteza no ROI</li>
              </ul>
            </div>
          </div>
          
          <div 
            className={styles.afterLayer} 
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <div className={styles.content}>
              <h3>Comando BuildSync</h3>
              <ul>
                <li>✅ Tempo Real (WhatsApp)</li>
                <li>✅ Precisão de 99.8%</li>
                <li>✅ Rentabilidade Garantida</li>
              </ul>
            </div>
          </div>

          <div className={styles.handle} style={{ left: `${sliderPos}%` }}>
            <div className={styles.arrowLeft}></div>
            <div className={styles.arrowRight}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
