'use client';

import React from 'react';
import styles from './MarketTicker.module.css';

const MarketTicker = () => {
  const indicators = [
    { label: "CUB-SP", value: "R$ 1.942,12", change: "+0.42%" },
    { label: "INCC-M", value: "3.412,50", change: "+0.15%" },
    { label: "SELIC", value: "10.75%", change: "0.00%" },
    { label: "AÇO (TON)", value: "R$ 5.420", change: "-1.20%" },
    { label: "CIMENTO (SAC)", value: "R$ 38,90", change: "+2.10%" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {indicators.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.label}>{item.label}:</span>
            <span className={styles.value}>{item.value}</span>
            <span className={item.change.startsWith('+') ? styles.up : item.change.startsWith('-') ? styles.down : styles.neutral}>
              {item.change}
            </span>
          </div>
        ))}
        {/* Duplicate for infinite effect */}
        {indicators.map((item, i) => (
          <div key={`dup-${i}`} className={styles.item}>
            <span className={styles.label}>{item.label}:</span>
            <span className={styles.value}>{item.value}</span>
            <span className={item.change.startsWith('+') ? styles.up : item.change.startsWith('-') ? styles.down : styles.neutral}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
