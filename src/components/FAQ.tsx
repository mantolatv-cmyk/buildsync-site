'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "Como o BuildSync garante a segurança dos meus dados?",
    answer: "Utilizamos criptografia AES-256 em repouso e TLS em trânsito. Nossos servidores estão localizados em infraestrutura Tier 4 com redundância total e conformidade com a LGPD."
  },
  {
    question: "É possível integrar com o Sienge ou outros ERPs?",
    answer: "Sim. O BuildSync possui uma API robusta e conectores nativos para os principais ERPs de construção do mercado, permitindo a sincronização automática de custos e insumos."
  },
  {
    question: "O app funciona offline no canteiro de obras?",
    answer: "Sim. Você pode coletar evidências e registrar dados offline. Assim que houver conexão, o BuildSync sincroniza tudo automaticamente com a nuvem."
  },
  {
    question: "Como funciona a precificação para múltiplos projetos?",
    answer: "Temos planos flexíveis baseados no VGV (Valor Geral de Vendas) gerenciado ou por número de projetos ativos. Fale com um consultor para um plano personalizado."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Dúvidas <span>Frequentes</span></h2>
          <p>Respostas diretas para as perguntas de quem decide o futuro da obra.</p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ''} glass`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className={styles.question}>
                <h3>{item.question}</h3>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
