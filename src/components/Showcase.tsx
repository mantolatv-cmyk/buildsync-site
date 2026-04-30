'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Showcase.module.css';

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.header}>
          <h2>Tecnologia que Transforma a Gestão</h2>
          <p>Uma interface desenhada para a alta cúpula da construção.</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.imageWrapper} animate-fade-in`}>
            <Image 
              src="/assets/showcase-1.png" 
              alt="BuildSync 3D Model View" 
              width={600}
              height={400}
              className={styles.image}
            />
            <div className={styles.caption}>
              <h3>Modelagem 3D & KPIs</h3>
              <p>Visualize o progresso físico e financeiro em uma única tela.</p>
            </div>
          </div>

          <div className={`${styles.imageWrapper} animate-fade-in`}>
            <Image 
              src="/assets/showcase-2.jpg" 
              alt="BuildSync Executive Dashboard" 
              width={600}
              height={400}
              className={styles.image}
            />
            <div className={styles.caption}>
              <h3>Controle na Palma da Mão</h3>
              <p>Acesse seus dados críticos de qualquer lugar, com total segurança.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
