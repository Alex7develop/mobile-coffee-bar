"use client";
import { motion } from "framer-motion";
import styles from "./CoffeeSmokeEffect.module.css";

export default function CoffeeSmokeEffect() {
  return (
    <div className={styles.smokeContainer}>
      {/* First smoke layer - slow */}
      <motion.div
        className={styles.smoke}
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(212,165,116,0.25) 0%, rgba(212,165,116,0.08) 40%, transparent 70%)',
          left: '15%',
          top: '10%',
        }}
        animate={{
          y: [0, -100, -200, -300],
          x: [0, 30, -20, 10],
          scale: [1, 1.3, 1.6, 1.9],
          opacity: [0, 0.8, 0.5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
      />

      {/* Second smoke layer - medium */}
      <motion.div
        className={styles.smoke}
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(185,153,104,0.22) 0%, rgba(185,153,104,0.07) 40%, transparent 70%)',
          left: '70%',
          top: '30%',
        }}
        animate={{
          y: [0, -120, -240, -360],
          x: [0, -40, 30, -15],
          scale: [1, 1.4, 1.7, 2],
          opacity: [0, 0.75, 0.45, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
          delay: 2,
        }}
      />

      {/* Third smoke layer - fast */}
      <motion.div
        className={styles.smoke}
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(200,155,95,0.24) 0%, rgba(200,155,95,0.08) 40%, transparent 70%)',
          left: '40%',
          top: '60%',
        }}
        animate={{
          y: [0, -90, -180, -270],
          x: [0, 25, -30, 20],
          scale: [1, 1.35, 1.65, 1.85],
          opacity: [0, 0.8, 0.5, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.8,
          delay: 4,
        }}
      />

      {/* Fourth smoke layer - very slow */}
      <motion.div
        className={styles.smoke}
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(180,130,80,0.2) 0%, rgba(180,130,80,0.06) 40%, transparent 70%)',
          left: '85%',
          top: '75%',
        }}
        animate={{
          y: [0, -110, -220, -330],
          x: [0, -35, 25, -10],
          scale: [1, 1.45, 1.75, 2.05],
          opacity: [0, 0.7, 0.4, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.2,
          delay: 6,
        }}
      />

      {/* Fifth smoke layer - medium-slow */}
      <motion.div
        className={styles.smoke}
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(195,145,90,0.23) 0%, rgba(195,145,90,0.075) 40%, transparent 70%)',
          left: '25%',
          top: '85%',
        }}
        animate={{
          y: [0, -105, -210, -315],
          x: [0, 35, -25, 15],
          scale: [1, 1.38, 1.68, 1.92],
          opacity: [0, 0.78, 0.48, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.9,
          delay: 1,
        }}
      />

      {/* Sixth smoke layer - fast */}
      <motion.div
        className={styles.smoke}
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(205,160,100,0.21) 0%, rgba(205,160,100,0.065) 40%, transparent 70%)',
          left: '55%',
          top: '15%',
        }}
        animate={{
          y: [0, -95, -190, -285],
          x: [0, -28, 32, -18],
          scale: [1, 1.32, 1.62, 1.88],
          opacity: [0, 0.72, 0.42, 0],
        }}
        transition={{
          duration: 10.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.7,
          delay: 3,
        }}
      />
    </div>
  );
}

