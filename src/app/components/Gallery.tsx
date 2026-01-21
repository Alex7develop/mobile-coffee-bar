"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Gallery.module.css";

const images = [
  "/gallery/bar3.png",
  "/gallery/bar4.png",
  "/gallery/bar2.png",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    if (selectedImage) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <motion.div 
        className={styles.gallery}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {images.map((src, i) => (
          <motion.div 
            key={src} 
            className={styles.galleryItem}
            variants={{
              hidden: { opacity: 0, scale: 0.85, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            onClick={() => setSelectedImage(src)}
            style={{ cursor: 'pointer' }}
          >
            <Image 
              src={src} 
              alt={`bar image ${i+1}`} 
              fill 
              style={{objectFit:'cover'}}
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
                aria-label="Закрыть"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Увеличенное изображение"
                fill
                style={{ objectFit: 'contain' }}
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
