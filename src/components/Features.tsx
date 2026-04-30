'use client';

import React from 'react';
import { TrendingUp, Clock, BarChart3 } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    title: "Visão Financeira Absoluta",
    description: "Acompanhe o Capital Total Investido e o Custo por m² atual em tempo real, com comparativos precisos de mercado.",
    icon: <BarChart3 size={32} />,
    color: "blue"
  },
  {
    title: "Previsibilidade de Prazos",
    description: "Mantenha o status do seu prazo sempre visível. Elimine surpresas e garanta entregas no tempo certo.",
    icon: <Clock size={32} />,
    color: "green"
  },
  {
    title: "Maximização de ROI",
    description: "Gráficos inteligentes de Orçado vs. Realizado para que você saiba exatamente para onde vai cada centavo.",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
