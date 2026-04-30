'use client';

import React from 'react';
import styles from './TrustBar.module.css';

const integrations = [
  "WhatsApp AI",
  "Microsoft Excel",
  "Sienge",
  "Google Drive",
  "Autodesk",
  "SAP"
];

const TrustBar = () => {
  return (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.label}>Integrações Enterprise:</span>
          <div className={styles.logos}>
            {integrations.map((item, i) => (
              <div key={i} className={styles.logoItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
