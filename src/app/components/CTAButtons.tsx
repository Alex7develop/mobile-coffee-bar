"use client";
import { motion } from "framer-motion";
import styles from "./CTAButtons.module.css";

export function CTAButtons() {
  return (
    <motion.div 
      className={styles.ctaContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
    >
      <motion.a
        className={styles.primary}
        href="https://t.me/neo_coffee_experience"
        target="_blank"
        rel="noopener noreferrer"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        Написать в Telegram
      </motion.a>
      <motion.a
        className={styles.secondary}
        href="/doc/neo-presentation.pdf"
        target="_blank"
        rel="noopener noreferrer"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        Скачать презентацию
      </motion.a>
    </motion.div>
  );
}

