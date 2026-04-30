'use client';

import React from 'react';
import styles from './TargetAudience.module.css';

const TargetAudience = () => {
  return (
    <section id="beneficios" className={styles.targetSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.audienceCard} ${styles.builders} glass`}>
            <div className={styles.content}>
              <h2>Pequenos Construtores</h2>
              <p>Escale sua construtora com margens previsíveis e relatórios profissionais de nível Enterprise. Impressione seus investidores com transparência total.</p>
              <ul className={styles.benefitList}>
                <li>Relatórios em um clique</li>
                <li>Gestão de múltiplos projetos</li>
                <li>Dashboard de rentabilidade</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.audienceCard} ${styles.homeowners} glass`}>
            <div className={styles.content}>
              <h2>Casa Própria</h2>
              <p>Construa o lar dos seus sonhos sem os pesadelos financeiros. Tenha clareza total do seu orçamento e evite desvios de custo inesperados.</p>
              <ul className={styles.benefitList}>
                <li>Controle de gastos por m²</li>
                <li>Cronograma financeiro real</li>
                <li>Alertas de desvio de custo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
