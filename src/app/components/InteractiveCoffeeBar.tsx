"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InteractiveCoffeeBar.module.css";

type BarZone = "main" | "brew" | "matcha" | "logo" | null;

export default function InteractiveCoffeeBar() {
  const [activeZone, setActiveZone] = useState<BarZone>(null);

  const tooltips = {
    main: "Основной бар",
    brew: "Brew стойка для альтернативного заваривания",
    matcha: "Матча бар",
    logo: "Место для вашего логотипа",
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Конфигурация мобильного бара NEO
      </motion.div>
      
      <motion.div 
        className={styles.barWrapper}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* SVG Isometric Bar */}
        <svg 
          viewBox="0 0 1000 600" 
          className={styles.barSvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Shadow */}
          <ellipse 
            cx="500" 
            cy="550" 
            rx="380" 
            ry="40" 
            fill="rgba(0,0,0,0.2)"
            filter="blur(20px)"
          />

          {/* Main Bar Counter - Center */}
          <g 
            className={styles.barZone}
            onMouseEnter={() => setActiveZone("main")}
            onMouseLeave={() => setActiveZone(null)}
          >
            {/* Main counter surface */}
            <path
              d="M 250 250 L 750 250 L 700 320 L 300 320 Z"
              fill={activeZone === "main" ? "#d4a574" : "#8B6F47"}
              stroke="#d4a574"
              strokeWidth="3"
              className={styles.interactive}
            />
            {/* Front face */}
            <path
              d="M 300 320 L 250 380 L 750 380 L 700 320 Z"
              fill={activeZone === "main" ? "#a67c52" : "#6B4423"}
              stroke="#b89968"
              strokeWidth="2"
            />
            {/* Left side */}
            <path
              d="M 250 250 L 300 320 L 250 380 Z"
              fill={activeZone === "main" ? "#8B6F47" : "#5A3A1A"}
              stroke="#9a7d5c"
              strokeWidth="2"
            />
            {/* Right side */}
            <path
              d="M 750 250 L 700 320 L 750 380 Z"
              fill={activeZone === "main" ? "#8B6F47" : "#5A3A1A"}
              stroke="#9a7d5c"
              strokeWidth="2"
            />
            
            {/* Logo placement area on main bar */}
            <g
              onMouseEnter={() => setActiveZone("logo")}
              onMouseLeave={() => setActiveZone(null)}
            >
              <rect
                x="420"
                y="270"
                width="160"
                height="35"
                rx="8"
                fill={activeZone === "logo" ? "rgba(212,165,116,0.3)" : "rgba(212,165,116,0.15)"}
                stroke="#d4a574"
                strokeWidth="2"
                strokeDasharray="5,5"
                className={styles.interactive}
              />
              <text
                x="500"
                y="293"
                textAnchor="middle"
                fill="#d4a574"
                fontSize="14"
                fontWeight="600"
                fontFamily="Manrope, sans-serif"
              >
                YOUR LOGO
              </text>
            </g>

            {/* Coffee machine silhouette */}
            <rect x="340" y="230" width="80" height="15" rx="3" fill="#3a3a3a" />
            <rect x="350" y="215" width="60" height="15" rx="2" fill="#4a4a4a" />
            
            {/* Cups on counter */}
            <ellipse cx="620" cy="275" rx="12" ry="8" fill="#e8e3dc" opacity="0.8" />
            <ellipse cx="650" cy="275" rx="12" ry="8" fill="#e8e3dc" opacity="0.8" />
          </g>

          {/* Left Extension - Brew Station */}
          <g
            className={styles.barZone}
            onMouseEnter={() => setActiveZone("brew")}
            onMouseLeave={() => setActiveZone(null)}
          >
            {/* Brew counter top */}
            <path
              d="M 150 280 L 280 280 L 260 330 L 170 330 Z"
              fill={activeZone === "brew" ? "#d4a574" : "#8B6F47"}
              stroke="#d4a574"
              strokeWidth="2.5"
              className={styles.interactive}
            />
            {/* Front */}
            <path
              d="M 170 330 L 140 370 L 280 370 L 260 330 Z"
              fill={activeZone === "brew" ? "#a67c52" : "#6B4423"}
              stroke="#b89968"
              strokeWidth="2"
            />
            {/* Side */}
            <path
              d="M 150 280 L 170 330 L 140 370 Z"
              fill={activeZone === "brew" ? "#8B6F47" : "#5A3A1A"}
            />

            {/* V60 drippers */}
            <g transform="translate(200, 265)">
              <path d="M 0 0 L -8 15 L 8 15 Z" fill="#e8e3dc" stroke="#d4a574" strokeWidth="1.5" />
              <ellipse cx="0" cy="0" rx="9" ry="3" fill="none" stroke="#d4a574" strokeWidth="1.5" />
            </g>
            <g transform="translate(230, 265)">
              <path d="M 0 0 L -8 15 L 8 15 Z" fill="#e8e3dc" stroke="#d4a574" strokeWidth="1.5" />
              <ellipse cx="0" cy="0" rx="9" ry="3" fill="none" stroke="#d4a574" strokeWidth="1.5" />
            </g>
          </g>

          {/* Right Extension - Matcha Bar */}
          <g
            className={styles.barZone}
            onMouseEnter={() => setActiveZone("matcha")}
            onMouseLeave={() => setActiveZone(null)}
          >
            {/* Matcha counter top */}
            <path
              d="M 720 280 L 850 280 L 830 330 L 740 330 Z"
              fill={activeZone === "matcha" ? "#d4a574" : "#8B6F47"}
              stroke="#d4a574"
              strokeWidth="2.5"
              className={styles.interactive}
            />
            {/* Front */}
            <path
              d="M 740 330 L 720 370 L 860 370 L 830 330 Z"
              fill={activeZone === "matcha" ? "#a67c52" : "#6B4423"}
              stroke="#b89968"
              strokeWidth="2"
            />
            {/* Side */}
            <path
              d="M 850 280 L 830 330 L 860 370 Z"
              fill={activeZone === "matcha" ? "#8B6F47" : "#5A3A1A"}
            />

            {/* Matcha bowl */}
            <ellipse cx="780" cy="295" rx="20" ry="10" fill="#7a9b6e" opacity="0.9" />
            <ellipse cx="780" cy="292" rx="18" ry="8" fill="#8fae84" opacity="0.8" />
            
            {/* Matcha whisk */}
            <line x1="815" y1="285" x2="815" y2="305" stroke="#d4a574" strokeWidth="2" />
            <ellipse cx="815" cy="307" rx="6" ry="3" fill="none" stroke="#d4a574" strokeWidth="1.5" />
          </g>

          {/* Decorative elements */}
          <g opacity="0.3">
            <circle cx="100" cy="150" r="3" fill="#d4a574" />
            <circle cx="900" cy="180" r="2" fill="#d4a574" />
            <circle cx="850" cy="120" r="2.5" fill="#b89968" />
          </g>
        </svg>

        {/* Tooltips */}
        <AnimatePresence>
          {activeZone && activeZone !== "logo" && (
            <motion.div
              className={styles.tooltip}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {tooltips[activeZone]}
            </motion.div>
          )}
          {activeZone === "logo" && (
            <motion.div
              className={`${styles.tooltip} ${styles.tooltipLogo}`}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {tooltips.logo}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className={styles.legend}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#d4a574' }}></div>
          <span>Основной бар с кофемашиной</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#d4a574' }}></div>
          <span>Brew стойка V60</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#7a9b6e' }}></div>
          <span>Матча бар</span>
        </div>
      </motion.div>
    </div>
  );
}

