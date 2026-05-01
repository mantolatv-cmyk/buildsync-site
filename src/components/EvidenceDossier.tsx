'use client';

import React from 'react';
import styles from './EvidenceDossier.module.css';
import { Camera, FileCheck, Shield } from 'lucide-react';

const EvidenceDossier = () => {
  return (
    <section id="evidencias" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.visualContent}>
            <div className={styles.cardStack}>
              <div className={`${styles.card} ${styles.card1}`}>
                <div className={styles.cardHeader}>
                  <Camera size={16} /> Foto de Obra #124
                </div>
                <div className={styles.imagePlaceholder}>Laje concluída - Setor A</div>
              </div>
              <div className={`${styles.card} ${styles.card2}`}>
                <div className={styles.cardHeader}>
                  <FileCheck size={16} /> Nota Fiscal Emitida
                </div>
                <div className={styles.docPlaceholder}>R$ 12.450,00 - Materiais</div>
              </div>
            </div>
            <div className={styles.glow}></div>
          </div>

          <div className={styles.textContent}>
            <div className={styles.badge}>Compliance Bancário</div>
            <h2>Dossiê de <span>Evidências</span> Inteligente</h2>
            <p>
              Automatize a geração de relatórios de medição para bancos e investidores. 
              O BuildSync organiza fotos, notas e progresso físico em um dossiê digital 
              irrefutável.
            </p>
            <ul className={styles.list}>
              <li><Shield size={18} /> Auditoria em Tempo Real</li>
              <li><Shield size={18} /> Histórico Digital Permanente</li>
              <li><Shield size={18} /> Aprovação de Medição Agilizada</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceDossier;
