import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <h5>Тел.:</h5>
        <a href="tel:+79673954584" className={styles.span}>
          +7 (967) 395-45-84
        </a>
      </div>
      <div className={styles.line}>
        <h5>Почта:</h5>
        <a href="mailto:ialisuf.ru@mail.ru" className={styles.span}>
          ialisuf.ru@mail.ru
        </a>
      </div>
      <div className={styles.line}>
        <h5>Город:</h5>
        <span>Москва</span>
      </div>
      <div className={styles.line}>
        <h5>Возраст:</h5>
        <span>21 год</span>
      </div>
    </div>
  );
};

export default AboutMe;
