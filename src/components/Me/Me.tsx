import styles from "./me.module.scss";
import { useEffect, useState } from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Me = () => {
  const [highlighted, setHighlighted] = useState(true);
  const [text, setText] = useState("Фронтенд");
  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlighted(!highlighted);
      setTimeout(() => {
        setText((prevText) =>
          prevText === "Фронтенд" ? "Frontend" : "Фронтенд"
        );
        setHighlighted(!highlighted);
      }, 2000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [text, highlighted]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Привет 👋, я <br />
          Хадиев Алиюсуф <br />
          <span className={highlighted ? styles.color1 : styles.color2}>
            {text}
          </span>
          <br />
          разработчик
        </h1>

        <p>
          Рад приветствовать Вас на своем сайте-портфолио! Специализируюсь на
          разработке клиентской стороны веб-приложений. Интересуюсь созданием
          серверной части приложений и сайтов.
        </p>
        <Link to={"/contacts"}>
          <button className={styles.btn}>
            Написать мне <BiSolidMessageSquareDetail className={styles.icon} />
          </button>
        </Link>
      </div>
      <>
        <img src="me.png" alt="" className={styles.img} />
      </>
    </div>
  );
};

export default Me;
