'use client';

import React from 'react';
import Image from 'next/image';
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
                <div className={styles.imageContainer}>
                  <Image src="/assets/evidence-1.png" alt="Obra Laje" fill className={styles.evidenceImage} />
                </div>
              </div>
              <div className={`${styles.card} ${styles.card2}`}>
                <div className={styles.cardHeader}>
                  <FileCheck size={16} /> Evidência de Progresso
                </div>
                <div className={styles.imageContainer}>
                  <Image src="/assets/evidence-2.png" alt="Obra Interior" fill className={styles.evidenceImage} />
                </div>
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
