import styles from "./WebDev.module.scss";
import { IoCodeSlash } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
const WebDev = () => {
  return (
    <div className={styles.content}>
      <span className={styles.head}>Вэб-разработка</span>
      <div className={styles.block}>
        <div className={styles.container}>
          <IoCodeSlash className={styles.icon} />
          <span className={styles.name}> Frontend</span>
          <div className={styles.stack}>
            <p>➔ React.js</p>
            <p>➔ TypeScript</p>
            <p>➔ SCSS</p>
            <p>➔ HTML 5</p>
          </div>
          <h4>
            Разработаю клиентскую часть приложения/сайта на современном, гибком
            стеке технологий. Использую фреймворки NEXT.js для построения SSR
            приложений в связке с TypeScript и Tailwind CSS для быстрой
            стилизации интерфейсов.
          </h4>
        </div>
        <div className={styles.container}>
          <IoSettingsOutline className={styles.icon} />
          <span>Backend</span>
          <div className={styles.stack}>
            <p>➔ Mongo DB</p>
            <p>➔ Express.js</p>
            <p>➔ React.js</p>
            <p>➔ Node.js</p>
          </div>
          <h4>
            В серверной части разработки приложений использую Express.js в
            связке с Mongo DB, что обеспечивает более быструю разработку на
            стороне сервера и ускоряет темп разработки приложения.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
