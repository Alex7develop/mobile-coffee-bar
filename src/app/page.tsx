"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./page.module.css";
import Gallery from "./components/Gallery";
import { CTAButtons } from "./components/CTAButtons";
import Footer from "./components/Footer";
import CoffeeSmokeEffect from "./components/CoffeeSmokeEffect";
import AlternativeBrewMethods from "./components/AlternativeBrewMethods";
import ValuesAccordion from "./components/ValuesAccordion";
import PhilosophyAccordion from "./components/PhilosophyAccordion";
import FormatsAccordion from "./components/FormatsAccordion";
import MissionAccordion from "./components/MissionAccordion";

const valuesData = [
  {title: "Концепция прежде всего", desc: "Кофе — отражение идеи, её тон и характер."},
  {title: "Эстетика как стандарт", desc: "Каждая деталь — часть визуального языка."},
  {title: "Опыт выше скорости", desc: "Мы создаём момент, а не поток."},
  {title: "Сервис как искусство", desc: "Отношение важнее демонстрации навыков."},
  {title: "Качество без компромиссов", desc: "Продукты, оборудование и рецептуры — уровня брендов и мероприятий."},
];

const philosophyItems = [
  "Встраиваем кофе в концепцию события — визуально, вкусово и сервисно.",
  "Делаем кофе частью замысла, а не отдельной зоной.",
  "Задаём стандарт того, как кофе должен ощущаться в пространстве.",
];

const philosophyData = [
  {title: "Встраиваем кофе в концепцию события", desc: "Визуально, вкусово и сервисно."},
  {title: "Делаем кофе частью замысла", desc: "А не отдельной зоной."},
  {title: "Задаём стандарт того, как кофе должен ощущаться", desc: "В пространстве."},
];

const formatsData = [
  {
    title: "NEO FORMAT",
    price: "100 000 ₽",
    notes: ["лаконичное присутствие", "чистый визуал", "базовый опыт"]
  },
  {
    title: "NEO EXPERIENCE",
    price: "180 000 ₽",
    notes: ["интеграция в концепцию события", "расширенный бар", "авторская подача"]
  },
  {
    title: "NEO SIGNATURE",
    price: "250 000 ₽",
    notes: ["индивидуальный проект", "уникальная архитектура бара", "полный контроль опыта"]
  },
];

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
          <img className={styles.heroImage} src="/gallery/bar4.png" alt="NEO Coffee Experience bar hero" />
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
            НЕО
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
          className={styles.accordionSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <MissionAccordion text="Мы проектируем кофейный опыт как часть визуальной, вкусовой и смысловой концепции события или пространства." />
        </motion.section>

        {/* Философия */}
        <motion.section 
          className={styles.accordionSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhilosophyAccordion items={philosophyData} />
        </motion.section>

        {/* Ценности */}
        <motion.section 
          className={styles.accordionSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ValuesAccordion values={valuesData.slice(0, 5)} />
        </motion.section>

        {/* Форматы */}
        <motion.section 
          className={styles.accordionSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <FormatsAccordion formats={formatsData} />
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

        {/* Альтернативные методы заваривания с 3D моделями */}
        <motion.section 
          className={styles.brewMethodsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <AlternativeBrewMethods />
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
