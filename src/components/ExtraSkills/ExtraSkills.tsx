import styles from "./ExtraSkills.module.scss";
const ExtraSkills = () => {
  return (
    <div className={styles.container}>
      <h3>Дополнительные навыки</h3>
      <div className={styles.skills}>
        <span>TypeScript</span>
        <span>Next.js</span>
        <span>TailwindCSS</span>
        <span>MongoDB</span>
        <span>Webpack</span>
        <span>Node.js</span>
        <span>Git</span>
        <span>React Hooks</span>
        <span>Rest API</span>
        <span>Axios</span>
        <span>Tailwind CSS</span>
        <span>Bootstrap</span>
      </div>
    </div>
  );
};

export default ExtraSkills;
