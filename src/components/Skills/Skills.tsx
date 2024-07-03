import styles from "./Skills.module.scss";
const Skills = () => {
  return (
    <div className={styles.container}>
      <h3>Основные навыки</h3>
      <div className={styles.skill}>
        <div className={styles.value}>
          <span>HTML</span> <span>90%</span>
        </div>
        <>
          <progress className={styles.progress} max="100" value="90"></progress>
        </>
      </div>
      <div className={styles.skill}>
        <div className={styles.value}>
          <span>CSS</span> <span>80%</span>
        </div>
        <>
          <progress className={styles.progress} max="100" value="80"></progress>
        </>
      </div>
      <div className={styles.skill}>
        <div className={styles.value}>
          <span>JavaScript</span> <span>70%</span>
        </div>
        <>
          <progress className={styles.progress} max="100" value="70"></progress>
        </>
      </div>
      <div className={styles.skill}>
        <div className={styles.value}>
          <span>React.js</span> <span>80%</span>
        </div>
        <>
          <progress className={styles.progress} max="100" value="80"></progress>
        </>
      </div>
      <div className={styles.skill}>
        <div className={styles.value}>
          <span>Redux Toolkit</span> <span>70%</span>
        </div>
        <>
          <progress className={styles.progress} max="100" value="70"></progress>
        </>
      </div>
    </div>
  );
};

export default Skills;
