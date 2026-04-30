'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Investidor Imobiliário",
    text: "O BuildSync mudou a forma como acompanho meus aportes. A clareza do ROI em tempo real me deu a segurança que eu precisava para expandir meu portfólio."
  },
  {
    name: "Ana Beatriz",
    role: "Proprietária Residencial",
    text: "Finalmente uma ferramenta que fala a língua de quem está construindo a casa própria. Sem planilhas complexas, apenas os dados que importam."
  },
  {
    name: "Eng. Marcos Silva",
    role: "Construtor",
    text: "A previsibilidade de prazos é o diferencial. Meus clientes adoram os relatórios automáticos e a transparência do dashboard."
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>Confiança no Próximo Nível</h2>
          <p>O que dizem os executivos que já utilizam o BuildSync.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={`${styles.testimonialCard} glass`}>
              <Quote className={styles.quoteIcon} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.footer}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
