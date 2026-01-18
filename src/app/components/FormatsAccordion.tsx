"use client";
import React, { useState } from "react";
import styles from "./FormatsAccordion.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface FormatItem {
  title: string;
  price: string;
  notes: string[];
}

interface FormatsAccordionProps {
  formats: FormatItem[];
}

export default function FormatsAccordion({ formats }: FormatsAccordionProps) {
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
          <span className={styles.accordionTitle}>ФОРМАТЫ</span>
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
                {formats.map((format, index) => (
                  <motion.div
                    key={index}
                    className={styles.formatItem}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <div className={styles.formatHeader}>
                      <div className={styles.formatTitle}>{format.title}</div>
                      <div className={styles.formatPrice}>{format.price}</div>
                    </div>
                    <ul className={styles.formatNotes}>
                      {format.notes.map((note, noteIndex) => (
                        <li key={noteIndex}>{note}</li>
                      ))}
                    </ul>
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

