"use client";
import styles from "./page.module.css";
import Gallery from "./components/Gallery";
import { CTAButtons } from "./components/CTAButtons";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* HERO IMAGE + OVERLAY */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrap}>
          <img className={styles.heroImage} src="/gallery/bar3.png" alt="NEO Coffee Experience bar hero" />
        </div>
        <div className={styles.heroOverlayStrict}>
          <div className={styles.logo}>NEO</div>
          <h1 className={styles.title}>Переосмысление привычного<br />через эстетику, технологию и сервис</h1>
        </div>
      </section>

      <main className={styles.main}>

        {/* Миссия */}
        <section className={styles.simpleSection}>
          <h2 className={styles.sectionTitle}>Миссия</h2>
          <p className={styles.sectionText}>Мы проектируем кофейный опыт как часть визуальной, вкусовой и смысловой концепции события или пространства.</p>
        </section>

        {/* Философия */}
        <section className={styles.simpleSection}>
          <h2 className={styles.sectionTitle}>Философия NEO</h2>
          <ul className={styles.sectionList}>
            <li>Встраиваем кофе в концепцию события — визуально, вкусово и сервисно.</li>
            <li>Делаем кофе частью замысла, а не отдельной зоной.</li>
            <li>Задаём стандарт того, как кофе должен ощущаться в пространстве.</li>
          </ul>
        </section>

        {/* Ценности */}
        <section className={styles.cardsSection}>
          <div className={styles.cardsRow}>
            {[
              {title: "Концепция прежде всего", desc: "Кофе — отражение идеи, её тон и характер."},
              {title: "Эстетика как стандарт", desc: "Каждая деталь — часть визуального языка."},
              {title: "Опыт выше скорости", desc: "Мы создаём момент, а не поток."},
              {title: "Сервис как искусство", desc: "Отношение важнее демонстрации навыков."},
              {title: "Качество без компромиссов", desc: "Продукты, оборудование и рецептуры — уровня брендов и мероприятий."},
              {title: "Философия", desc: "Встраиваем кофе в концепцию события — визуально, вкусово и сервисно, делая его частью общего замысла, а не отдельной зоной."},
            ].map((v, i) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueCardTitle}>{v.title}</div>
                <div className={styles.valueCardDesc}>{v.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Форматы */}
        <section className={styles.cardsSection}>
          <div className={styles.formatsRow}>
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
              <div key={f.title} className={styles.formatCard}>
                <div className={styles.formatTitle}>{f.title}</div>
                <div className={styles.formatPrice}>{f.price}</div>
                <ul className={styles.formatNotes}>
                  {f.notes.map(n=>(<li key={n}>{n}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Галерея */}
        <section className={styles.gallerySection}>
          <Gallery />
        </section>

        {/* Контакты / финальный экран */}
        <section className={styles.final + " section"}>
          <CTAButtons />
        </section>
      </main>
      <Footer />
    </div>
  );
}
