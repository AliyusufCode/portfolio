import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import styles from "./Socialnetwork.module.scss";
import { Link } from "react-router-dom";

const SocialNetworks = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <Link to={"https://vk.com/webdeveloper_777"} target="_blank">
          <SlSocialVkontakte className={styles.icon} />
        </Link>
      </button>

      <button className={styles.btn}>
        <Link
          to={"https://api.whatsapp.com/send? phone=89673954584"}
          target="_blank"
        >
          <FaWhatsapp className={styles.icon} />
        </Link>
      </button>
      <button className={styles.btn}>
        <Link to={"https://t.me/i1010101010101010"} target="_blank">
          <FaTelegramPlane className={styles.icon} />
        </Link>
      </button>
      <button className={styles.btn}>
        <Link to={"https://github.com/AliyusufCode"} target="_blank">
          <FaGithub className={styles.icon} />
        </Link>
      </button>
      <button className={styles.btn}>
        <Link to={"https://www.instagram.com/khadiev_0950"} target="_blank">
          <IoLogoInstagram className={styles.icon} />
        </Link>
      </button>
    </div>
  );
};

export default SocialNetworks;
