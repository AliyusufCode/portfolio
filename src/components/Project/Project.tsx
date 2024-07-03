import { FaGithub } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import styles from "./Project.module.scss";
import { Link } from "react-router-dom";

export type PropsProject = {
  img: string;
  title: string;
  body: string;
  stack: string;
  code: string;
  link: string;
  type?: string;
};

const Project = ({ img, title, body, stack, code, link }: PropsProject) => {
  return (
    <div className={styles.container}>
      <Link to={link} target="_blank">
        <img src={img} alt={img} className={styles.img} />
      </Link>
      <span>{title}</span>
      <p>{body}</p>
      <div className={styles.stackInfo}>
        <p className={styles.tech}>Тех. стэк:</p>
        <p className={styles.stack}> {stack}</p>
      </div>
      <div className={styles.links}>
        <div className={styles.div}>
          <HiOutlineEye className={styles.icon} />

          <Link to={code} target="_blank">
            Смотреть код
          </Link>
        </div>
        <div className={styles.div}>
          <FaGithub className={styles.icon} />
          <Link to={link} target="_blank">
            Посмотреть проект
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
