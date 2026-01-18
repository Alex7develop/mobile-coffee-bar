"use client";
import styles from "./Footer.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles.footerImgWrap}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image src="/gallery/bar6.webp" alt="Фирменный бар NEO" fill className={styles.footerImg} />
      </motion.div>
      <motion.div 
        className={styles.footerContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
      >
        <motion.div 
          className={styles.footerTitle}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Связаться с НЕО
        </motion.div>
        <motion.a 
          href="https://t.me/neo_coffee_experience" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Telegram
        </motion.a>
        <motion.a 
          href="mailto:info@neo-coffee.ru"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          info@neo-coffee.ru
        </motion.a>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Москва и вся Россия
        </motion.span>
      </motion.div>
    </motion.footer>
  );
}
