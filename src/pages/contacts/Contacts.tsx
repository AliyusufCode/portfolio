import styles from "./contacts.module.scss";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Contacts = () => {
  return (
    <div className={styles.container}>
      <span className={styles.head}>Контакты</span>
      <p>
        Я всегда открыт для обсуждения новых проектов, партнёрства, развития в
        мире технологий и наставничества.
      </p>
      <div className={styles.contacts}>
        <FaLocationDot className={styles.icon} />
        <div className={styles.block}>
          <span>Страна:</span>
          <span>Россия</span>
        </div>
        <div className={styles.block}>
          <span>Город:</span>
          <span>Москва</span>
        </div>
        <div className={styles.block}>
          <span>Улица:</span>
          <span>Новогорская</span>
        </div>
        <div className={styles.div}></div>
        <CgMail className={styles.icon} />
        <div className={styles.block}>
          <span>Email:</span>
          <span>
            <a href="mailto:ialisuf.ru@mail.ru">ialisuf.ru@mail.ru</a>
          </span>
        </div>
        <div className={styles.block}>
          <span>ВКонтакте:</span>
          <span>
            <a href="https://vk.com/webdeveloper_777" target="_blank">
              webdeveloper_777
            </a>
          </span>
        </div>
        <div className={styles.div}></div>

        <FaPhoneAlt className={styles.icon} />
        <div className={styles.block}>
          <span>Телефон:</span>
          <span>
            <a href="tel:+79673954584" className={styles.span}>
              +7 (967) 395-45-84
            </a>
          </span>
        </div>
        <div className={styles.block}>
          <span>Telegram:</span>
          <span>
            <a href="https://t.me/i1010101010101010" className={styles.span}>
              @i1010101010101010
            </a>
          </span>
        </div>
        <div className={styles.block}>
          <span>WhatsApp:</span>
          <span>
            <a
              href="https://api.whatsapp.com/send? phone=89673954584"
              className={styles.span}
            >
              @WhatsApp
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
