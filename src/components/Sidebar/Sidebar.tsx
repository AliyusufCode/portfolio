import AboutMe from "../AboutMe/AboutMe";
import DownloadResume from "../DownloadResume/DownloadResume";
import ExtraSkills from "../ExtraSkills/ExtraSkills";
import Skills from "../Skills/Skills";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import styles from "./sidebar.module.scss";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <img src="/image (2).png" alt="" className={styles.img} />
      <h2>Хадиев Алиюсуф</h2>
      <p>Frontend разработчик</p>
      <SocialNetworks />
      <AboutMe />
      <Skills />
      <ExtraSkills />
      <DownloadResume />
    </div>
  );
};

export default Sidebar;
