import styles from "./CTAButtons.module.css";

export function CTAButtons() {
  return (
    <div className={styles.ctaContainer}>
      <a
        className={styles.primary}
        href="https://t.me/neo_coffee_experience"
        target="_blank"
        rel="noopener noreferrer"
      >
        Написать в Telegram
      </a>
      <a
        className={styles.secondary}
        href="/doc/neo-presentation.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Скачать презентацию
      </a>
    </div>
  );
}

