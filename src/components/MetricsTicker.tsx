'use client';

import React from 'react';
import styles from './MetricsTicker.module.css';

const MetricsTicker = () => {
  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerWrapper}>
        <div className={styles.metric}>
          <span className={styles.label}>CAPITAL GERENCIADO:</span>
          <span className={styles.value}>R$ 4.8B+</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>ECONOMIA MÉDIA:</span>
          <span className={styles.value}>12.4%</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>OBRAS ATIVAS:</span>
          <span className={styles.value}>342</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>ROI MÉDIO:</span>
          <span className={styles.value}>18.5%</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>CUSTO MÉDIO M²:</span>
          <span className={styles.value}>R$ 4.150</span>
        </div>
        {/* Duplicate for seamless scrolling if needed, but here we just show a static bar for elegance */}
        <div className={styles.metric}>
          <span className={styles.label}>PRECISÃO ORÇAMENTÁRIA:</span>
          <span className={styles.value}>99.2%</span>
        </div>
      </div>
    </div>
  );
};

export default MetricsTicker;
