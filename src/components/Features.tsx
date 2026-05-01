'use client';

import React from 'react';
import { TrendingUp, Clock, BarChart3 } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    title: "Gestão Financeira de Obras",
    description: "Acompanhe o Capital Total Investido e o Custo por m² em tempo real, com comparativos precisos de mercado.",
    icon: <BarChart3 size={32} />,
    color: "blue"
  },
  {
    title: "Cronograma e Prazos",
    description: "Mantenha o status do seu prazo sempre visível. Elimine atrasos e garanta entregas no tempo planejado.",
    icon: <Clock size={32} />,
    color: "green"
  },
  {
    title: "KPIs e ROI Imobiliário",
    description: "Gráficos inteligentes de Orçado vs. Realizado para maximizar a rentabilidade do seu investimento.",
    icon: <TrendingUp size={32} />,
    color: "blue"
  }
];

const Features = () => {
  return (
    <section id="recursos" className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="animate-fade-in">O Poder dos Seus Dados</h2>
          <p className="animate-fade-in">Ferramentas de nível Enterprise para uma gestão residencial exclusiva.</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.card} glass`}>
              <div className={`${styles.iconWrapper} ${styles[feature.color]}`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className={styles.miniStats}>
                <div className={styles.miniStat}>
                  <span className={styles.statLabel}>Precisão:</span>
                  <span className={styles.statValue}>99.8%</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.miniStat}>
                  <span className={styles.statLabel}>Tempo Real:</span>
                  <span className={styles.statValue}>&lt; 1s</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
