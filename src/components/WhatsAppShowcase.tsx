'use client';

import React from 'react';
import styles from './WhatsAppShowcase.module.css';
import { MessageSquare, ShieldCheck, Cpu } from 'lucide-react';

const WhatsAppShowcase = () => {
  return (
    <section id="whatsapp" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <div className={styles.badge}>Diferencial Exclusivo</div>
            <h2>Sincronização <span>AI WhatsApp</span></h2>
            <p>
              Esqueça o preenchimento manual de planilhas. Envie fotos de recibos, 
              mensagens de áudio sobre custos ou atualizações de progresso diretamente 
              pelo WhatsApp. Nossa IA processa tudo e atualiza seu dashboard em tempo real.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <MessageSquare className={styles.icon} />
                <div>
                  <h4>Comandos de Voz</h4>
                  <p>Relate despesas por áudio e deixe a IA categorizar.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <ShieldCheck className={styles.icon} />
                <div>
                  <h4>Segurança Bancária</h4>
                  <p>Dados criptografados de ponta a ponta.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <Cpu className={styles.icon} />
                <div>
                  <h4>IA de Engenharia</h4>
                  <p>Nossa IA entende o vocabulário técnico da construção.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.chatContainer}>
              <div className={styles.chatHeader}>
                <div className={styles.avatar}>AI</div>
                <div>
                  <strong>BuildSync Copilot</strong>
                  <span>Online</span>
                </div>
              </div>
              <div className={styles.chatBody}>
                <div className={`${styles.message} ${styles.received}`}>
                  Olá! Recebi a foto do recibo de R$ 4.500,00 referente ao cimento. 
                  Já atualizei o Custo por m² da obra Jardim Europa.
                </div>
                <div className={`${styles.message} ${styles.sent}`}>
                  Qual o ROI projetado agora?
                </div>
                <div className={`${styles.message} ${styles.received}`}>
                  Com base nos custos atuais, seu ROI projetado subiu para <strong>14.8%</strong>. 
                  Deseja o relatório detalhado em PDF?
                </div>
              </div>
              <div className={styles.chatFooter}>
                Mensagem...
              </div>
            </div>
            <div className={styles.glow}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppShowcase;
