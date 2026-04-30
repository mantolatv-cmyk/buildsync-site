'use client';

import React, { useState } from 'react';
import styles from './ROICalculator.module.css';

const ROICalculator = () => {
  const [investment, setInvestment] = useState(500000);
  
  const potentialSavings = investment * 0.08; // Estimating 8% savings with BuildSync
  const roi = ((potentialSavings - 12000) / 12000) * 100; // Simplified ROI

  return (
    <section id="roi-calculator" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.textContent}>
            <h2>Simule sua <span>Economia</span></h2>
            <p>Descubra o potencial de lucro ao otimizar sua gestão com o BuildSync.</p>
            
            <div className={styles.inputGroup}>
              <label>Valor da Obra (R$)</label>
              <input 
                type="range" 
                min="100000" 
                max="5000000" 
                step="50000" 
                value={investment} 
                onChange={(e) => setInvestment(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.valueDisplay}>
                {investment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
            </div>
          </div>

          <div className={styles.resultContent}>
            <div className={styles.resultItem}>
              <span>Economia Estimada</span>
              <h3>{potentialSavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
            </div>
            <div className={styles.resultDivider}></div>
            <div className={styles.resultItem}>
              <span>Potencial de ROI</span>
              <h3 className={styles.highlight}>{roi.toFixed(1)}%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
