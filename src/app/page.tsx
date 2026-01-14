"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./page.module.css";
import Gallery from "./components/Gallery";
import { CTAButtons } from "./components/CTAButtons";
import Footer from "./components/Footer";
import CoffeeSmokeEffect from "./components/CoffeeSmokeEffect";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  return (
    <div className={styles.page}>
      {/* Coffee Smoke Background Effect */}
      <CoffeeSmokeEffect />

      {/* HERO IMAGE + OVERLAY */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.heroImageWrap}
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img className={styles.heroImage} src="/gallery/bar3.png" alt="NEO Coffee Experience bar hero" />
        </motion.div>
        <motion.div 
          className={styles.heroOverlayStrict}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className={styles.logo}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            NEO
          </motion.div>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Переосмысление привычного<br />через эстетику, технологию и сервис
          </motion.h1>
        </motion.div>
      </section>

      <main className={styles.main}>

        {/* Миссия */}
        <motion.section 
          className={styles.simpleSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.sectionTitle}>Миссия</h2>
          <p className={styles.sectionText}>Мы проектируем кофейный опыт как часть визуальной, вкусовой и смысловой концепции события или пространства.</p>
        </motion.section>

        {/* Философия */}
        <motion.section 
          className={styles.simpleSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.sectionTitle}>Философия NEO</h2>
          <motion.ul 
            className={styles.sectionList}
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
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              Встраиваем кофе в концепцию события — визуально, вкусово и сервисно.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              Делаем кофе частью замысла, а не отдельной зоной.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              Задаём стандарт того, как кофе должен ощущаться в пространстве.
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Ценности */}
        <motion.section 
          className={styles.cardsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className={styles.cardsRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            {[
              {title: "Концепция прежде всего", desc: "Кофе — отражение идеи, её тон и характер."},
              {title: "Эстетика как стандарт", desc: "Каждая деталь — часть визуального языка."},
              {title: "Опыт выше скорости", desc: "Мы создаём момент, а не поток."},
              {title: "Сервис как искусство", desc: "Отношение важнее демонстрации навыков."},
              {title: "Качество без компромиссов", desc: "Продукты, оборудование и рецептуры — уровня брендов и мероприятий."},
              {title: "Философия", desc: "Встраиваем кофе в концепцию события — визуально, вкусово и сервисно, делая его частью общего замысла, а не отдельной зоной."},
            ].map((v, i) => (
              <motion.div 
                key={v.title} 
                className={styles.valueCard}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <div className={styles.valueCardTitle}>{v.title}</div>
                <div className={styles.valueCardDesc}>{v.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Форматы */}
        <motion.section 
          className={styles.cardsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className={styles.formatsRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              {
                title: "NEO FORMAT",
                price: "100 000 ₽",
                notes:["лаконичное присутствие","чистый визуал","базовый опыт"]
              },
              {
                title: "NEO EXPERIENCE",
                price: "180 000 ₽",
                notes:["интеграция в концепцию события","расширенный бар","авторская подача"]
              },
              {
                title: "NEO SIGNATURE",
                price: "250 000 ₽",
                notes:["индивидуальный проект","уникальная архитектура бара","полный контроль опыта"]
              }
            ].map((f)=>(
              <motion.div 
                key={f.title} 
                className={styles.formatCard}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -12 }}
              >
                <div className={styles.formatTitle}>{f.title}</div>
                <div className={styles.formatPrice}>{f.price}</div>
                <ul className={styles.formatNotes}>
                  {f.notes.map(n=>(<li key={n}>{n}</li>))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Галерея */}
        <motion.section 
          className={styles.gallerySection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Gallery />
        </motion.section>

        {/* Контакты / финальный экран */}
        <motion.section 
          className={styles.final + " section"}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <CTAButtons />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
