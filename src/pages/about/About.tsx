import styles from "./about.module.scss";
const About = () => {
  return (
    <div className={styles.container}>
      <span className={styles.head}>Обо мне</span>
      <p>
        Заинтересовался web-разработкой более года назад. До этого занимался
        разработкой телеграм ботов на Python. Для достижения своей цели
        прикладывал много усилий - обучался на бесплалатных курсах, занимаюсь
        самообразованием, практикую написание кода, решаю задачи по
        программированию. Умею верстать адаптивные сайты, создавать динамичекие
        веб-приложения (клиент/сервер). Стремлюсь совершенствовать навыки
        учитывая новые тенденции в отрасли.
      </p>
      <div className={styles.block}>
        <div>
          <span className={styles.name}>Frontend</span>
        </div>
        <div>
          <img src="/html.png" alt="ts" className={styles.img} />
          <img src="/css.png" alt="ts" className={styles.img} />
          <img src="/ts.png" alt="ts" className={styles.img} />
          <img src="/js.png" alt="ts" className={styles.img} />
          <img src="/react.png" alt="ts" className={styles.img} />
          <img src="/redux.png" alt="ts" className={styles.img} />
          <img src="/tailwind.png" alt="ts" className={styles.img} />
          <img src="/bootstrap.png" alt="ts" className={styles.img} />
          <img src="/sass.png" alt="ts" className={styles.img} />
          <img src="/next.png" alt="ts" className={styles.img} />
        </div>
      </div>
      <div className={styles.block}>
        <div>
          <span className={styles.name}>Backend</span>
        </div>
        <div>
          <img src="/mongo.png" alt="ts" className={styles.img} />
          <img src="/express.png" alt="ts" className={styles.img} />
          <img src="/node.png" alt="ts" className={styles.img} />
        </div>
      </div>
      <div className={styles.block}>
        <div>
          <span className={styles.name}>Инструменты</span>
        </div>
        <div>
          <img src="/git.png" alt="ts" className={styles.img} />
          <img src="/vitejs.svg" alt="ts" className={styles.img} />
          <img src="/webpack.png" alt="ts" className={styles.img} />
          <img src="/figma.png" alt="ts" className={styles.img} />
          <img src="/vscode.png" alt="ts" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default About;
