import { useState } from "react";
import styles from "./portfolio.module.scss";
import Project, { PropsProject } from "../../components/Project/Project";

const Portfolio = () => {
  const list = ["Все проекты", "Frontend", "FullStack", "Вёрстка"];
  const [active, setActive] = useState(0);

  const infoProject = [
    {
      img: "/movie.png",
      title: "MovieMania",
      body: "Проект с удобным поиском фильмов, добавлением в избранное, удобная сортировка(рейтинг, жанр, годы выпуска),просмотр трейлера, регистрацией через clerk",
      stack:
        "Next.js 14, React Hooks, Redux Toolkit, Typescript, SCSS, React Icons, SwiperJs",
      code: "https://github.com/AliyusufCode/MovieMania-NextJs",
      link: "https://movie-mania-nextjs.vercel.app/",
      type: "Frontend",
    },
    {
      img: "/poster.png",
      title: "Постер",
      body: "FullStack проект для создания(удаляния,редактированием) постов с регистрацией, так же можно добавлять(удалять) комментарии.",
      stack: "MongoDb, ReactJs, Express, NodeJs",
      code: "https://github.com/AliyusufCode/Poster-Frontend",
      link: "https://poster-react-app.vercel.app",
      type: "FullStack",
    },

    {
      img: "/todo.png",
      title: "TodoApp",
      body: "TodoApp с добавлением, редактированием и удалением записей.",
      stack:
        "ReactJs, React Hooks, React-hot-toast, react-transition-group, React-icons, Redux Toolkit, TypeScript, BootStrap",
      code: "https://github.com/AliyusufCode/Todo-App",
      link: "https://todo-app-react-jsx.vercel.app/",
      type: "Frontend",
    },
    {
      img: "/store.png",
      title: "Store",
      body: "Интернет магазин с ноутбуками, наушниками, а так же со смартфонами",
      stack:
        "JavaScript, ReactJS, React Hooks, Redux Toolkit, React Router Dom, Axios, React Sceleton, SCSS",
      code: "https://github.com/AliyusufCode/home",
      link: "https://aliyusufcode.github.io/home/",
      type: "FullStack",
    },
    {
      img: "/site.png",
      title: "Самый первый сайт",
      body: "Мой самый первый проект в веб разработке",
      stack: "Css, HTML",
      code: "https://github.com/AliyusufCode/site",
      link: "https://aliyusufcode.github.io/site/",
      type: "Вёрстка",
    },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.head}>Портфолио</span>
      <ul className={styles.list}>
        {list.map((el, i) => (
          <li
            key={i}
            className={i === active ? styles.active : ""}
            onClick={() => setActive(i)}
          >
            {el}
          </li>
        ))}
      </ul>
      <div className={styles.projectCart}>
        {infoProject
          .filter((obj: PropsProject) => {
            return list[active] === "Все проекты" || obj.type === list[active];
          })
          .map((el: PropsProject, i) => (
            <Project
              key={i}
              stack={el.stack}
              body={el.body}
              title={el.title}
              link={el.link}
              img={el.img}
              code={el.code}
            />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
