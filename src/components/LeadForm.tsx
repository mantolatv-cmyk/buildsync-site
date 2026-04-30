'use client';

import React from 'react';
import styles from './LeadForm.module.css';

const LeadForm = () => {
  return (
    <section id="contato" className={styles.section}>
      <div className="container">
        <div className={`${styles.card} glass`}>
          <div className={styles.textContent}>
            <h2>Pronto para assumir o <span>Controle Absoluto</span>?</h2>
            <p>Solicite um acesso exclusivo e transforme a lucratividade das suas obras hoje mesmo.</p>
          </div>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu E-mail" required />
            <button type="submit" className={styles.submitBtn}>
              Solicitar Acesso Premium
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
