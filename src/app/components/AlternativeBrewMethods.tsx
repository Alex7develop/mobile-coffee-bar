"use client";
import { motion } from "framer-motion";
import styles from "./AlternativeBrewMethods.module.css";

export default function AlternativeBrewMethods() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.mainTitle}>Дополнительные сервисы</h2>
        <p className={styles.subtitle}>Альтернативные методы заваривания</p>
      </motion.div>

      <div className={styles.methodsGrid}>
        {/* Aeropress Block */}
        <motion.div
          className={styles.methodCard}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.methodNumber}>01</div>
            <h3 className={styles.methodTitle}>Аэропресс</h3>
          </div>
          
          <div className={styles.viewerWrapper}>
            <div className={styles.sketchfabEmbed}>
              <iframe
                title="Aeropress portable coffee maker"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/dd9b8664b2c64a2bb5d94788691dc20e/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&dnt=1"
                className={styles.iframe}
              />
            </div>
          </div>

          <div className={styles.cardFooter}>
            <p className={styles.description}>
              Компактный метод заваривания с насыщенным вкусом и коротким временем экстракции
            </p>
            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Время:</span>
                <span className={styles.specValue}>2-3 мин</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Объём:</span>
                <span className={styles.specValue}>200-250 мл</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* V60 Block */}
        <motion.div
          className={styles.methodCard}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.methodNumber}>02</div>
            <h3 className={styles.methodTitle}>Пуровер V60</h3>
          </div>
          
          <div className={styles.viewerWrapper}>
            <div className={styles.sketchfabEmbed}>
              <iframe
                title="Hario V60"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/98f57300ff0c4c7cbab22058f9e757c5/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&dnt=1"
                className={styles.iframe}
              />
            </div>
          </div>

          <div className={styles.cardFooter}>
            <p className={styles.description}>
              Классический метод пуровер для чистого, яркого вкуса с выраженной кислотностью
            </p>
            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Время:</span>
                <span className={styles.specValue}>3-4 мин</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Объём:</span>
                <span className={styles.specValue}>250-350 мл</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Matcha Block */}
        <motion.div
          className={styles.methodCard}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.methodNumber}>03</div>
            <h3 className={styles.methodTitle}>Матча</h3>
          </div>
          
          <div className={styles.viewerWrapper}>
            <div className={styles.sketchfabEmbed}>
              <iframe
                title="Matcha Tea Set"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/94b71d4d375d40e58ec0fa293e906c8a/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&dnt=1"
                className={styles.iframe}
              />
            </div>
          </div>

          <div className={styles.cardFooter}>
            <p className={styles.description}>
              Церемониальное приготовление японского зелёного чая с использованием бамбукового венчика
            </p>
            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Температура:</span>
                <span className={styles.specValue}>70-80°C</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Объём:</span>
                <span className={styles.specValue}>60-80 мл</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chemex Block */}
        <motion.div
          className={styles.methodCard}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.methodNumber}>04</div>
            <h3 className={styles.methodTitle}>Chemex</h3>
          </div>
          
          <div className={styles.viewerWrapper}>
            <div className={styles.sketchfabEmbed}>
              <iframe
                title="Chemex"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/d566f2747d2e409e9c3ef56a297ff7b0/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&dnt=1"
                className={styles.iframe}
              />
            </div>
          </div>

          <div className={styles.cardFooter}>
            <p className={styles.description}>
              Элегантный стеклянный пуровер с фильтрами для получения чистого и сбалансированного вкуса
            </p>
            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Время:</span>
                <span className={styles.specValue}>4-5 мин</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Объём:</span>
                <span className={styles.specValue}>300-500 мл</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Coffee Maker Block */}
        <motion.div
          className={styles.methodCard}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.methodNumber}>05</div>
            <h3 className={styles.methodTitle}>Фильтр кофе</h3>
          </div>
          
          <div className={styles.viewerWrapper}>
            <div className={styles.sketchfabEmbed}>
              <iframe
                title="Filter Coffee Maker"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/9ccda2fddba846e6ba97eb774b8a09c6/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&dnt=1"
                className={styles.iframe}
              />
            </div>
          </div>

          <div className={styles.cardFooter}>
            <p className={styles.description}>
              Классическая капельная кофеварка для автоматического приготовления больших объёмов
            </p>
            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Время:</span>
                <span className={styles.specValue}>5-8 мин</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Объём:</span>
                <span className={styles.specValue}>1-1.5 л</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decaf Block */}
        <motion.div
          className={styles.methodCard}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.methodNumber}>06</div>
            <h3 className={styles.methodTitle}>Decaf</h3>
          </div>
          
          <div className={styles.viewerWrapper}>
            <div className={styles.sketchfabEmbed}>
              <iframe
                title="Coffee Bean Decaf"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/85cff00d771c4be4ab19ccf3b21658a0/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&dnt=1"
                className={styles.iframe}
              />
            </div>
          </div>

          <div className={styles.cardFooter}>
            <p className={styles.description}>
              Кофе без кофеина для тех, кто ценит вкус, но хочет избежать стимулирующего эффекта
            </p>
            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Кофеин:</span>
                <span className={styles.specValue}>≤ 3 мг</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Метод:</span>
                <span className={styles.specValue}>Любой</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.note}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className={styles.noteIcon}>☕</div>
        <p>Используйте мышь для вращения 3D моделей и детального осмотра оборудования</p>
      </motion.div>
    </div>
  );
}

