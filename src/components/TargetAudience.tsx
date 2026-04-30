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
              <h2>Construtores de Alto Padrão</h2>
              <p>Escale sua construtora com gestão de obras profissional e relatórios de nível Enterprise. Impressione seus clientes e parceiros com transparência total.</p>
              <ul className={styles.benefitList}>
                <li>Gestão financeira em um clique</li>
                <li>KPIs de múltiplos projetos</li>
                <li>Dashboard de rentabilidade real</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.audienceCard} ${styles.homeowners} glass`}>
            <div className={styles.content}>
              <h2>Investidores Imobiliários</h2>
              <p>Maximize o retorno sobre o capital investido com dados precisos. Tenha clareza total do seu orçamento e garanta o ROI planejado da sua obra.</p>
              <ul className={styles.benefitList}>
                <li>Controle de custos por m²</li>
                <li>Cronograma financeiro executivo</li>
                <li>Previsibilidade de rentabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
