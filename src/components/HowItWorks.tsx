'use client';

import React from 'react';
import styles from './HowItWorks.module.css';
import { Smartphone, Zap, PieChart } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone size={32} />,
    title: "1. Sincronização Inteligente",
    description: "Conecte seu WhatsApp e planilhas em segundos. Nossa IA processa cada entrada automaticamente."
  },
  {
    icon: <Zap size={32} />,
    title: "2. Processamento Executivo",
    description: "Transformamos dados brutos em KPIs financeiros precisos, calculando ROI e custos por m²."
  },
  {
    icon: <PieChart size={32} />,
    title: "3. Decisões Estratégicas",
    description: "Acesse relatórios prontos para investidores e garanta o comando absoluto da sua rentabilidade."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>O Caminho para a Previsibilidade</h2>
          <p>Três passos simples para transformar sua gestão de obras em um motor de lucro.</p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                {step.icon}
                <div className={styles.stepNumber}>{index + 1}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
