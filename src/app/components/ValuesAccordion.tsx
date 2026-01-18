"use client";
import React, { useState } from "react";
import styles from "./ValuesAccordion.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ValueItem {
  title: string;
  desc: string;
}

interface ValuesAccordionProps {
  values: ValueItem[];
}

export default function ValuesAccordion({ values }: ValuesAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <button
          className={styles.accordionHeader}
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          <span className={styles.accordionTitle}>ЦЕННОСТИ</span>
          <motion.span
            className={styles.accordionIcon}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            +
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className={styles.accordionContent}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.accordionContentInner}>
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className={styles.valueItem}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <div className={styles.valueItemTitle}>{value.title}</div>
                    <div className={styles.valueItemDesc}>{value.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
