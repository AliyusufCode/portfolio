import styles from "./header.module.scss";
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

type HeaderProps = {
  setOpenMenu: any;
  openMenu: Boolean;
};
type ListTypes = {
  title: string;
  url: string;
};
const Header = ({ openMenu, setOpenMenu }: HeaderProps) => {
  const list = [
    { title: "Главная", url: "/" },
    { title: "Обо мне", url: "/about" },
    { title: "Портфолио", url: "/portfolio" },
    { title: "Контакты", url: "/contacts" },
  ];
  return (
    <div className={styles.container}>
      <div>
        <Link to={"/"} className={styles.logo}>
          <img src="/logo.jpg" alt="logo" className={styles.img} />
          <Link to={"/"}>
            <img src="/image (2).png" alt="" className={styles.imgMe} />
          </Link>
        </Link>
      </div>
      <div className={styles.list}>
        <Link to={"/"}>
          <Button Icon={IoHomeSharp} />
        </Link>
        <Link to={"/about"}>
          <Button Icon={BiSolidSpreadsheet} />
        </Link>
        <Link to={"/portfolio"}>
          <Button Icon={BsFillBriefcaseFill} />
        </Link>
        <Link to={"/contacts"}>
          <Button Icon={BiSolidMessageSquareDetail} />
        </Link>
      </div>
      <div className={styles.theme}>
        <button className={styles.btn}>
          {!openMenu ? (
            <GiHamburgerMenu
              className={styles.icon}
              onClick={() => setOpenMenu(true)}
            />
          ) : (
            <MdClose
              onClick={() => setOpenMenu(false)}
              className={styles.icon}
            />
          )}
        </button>
      </div>
      {openMenu && (
        <div className={styles.overlay} onClick={() => setOpenMenu(false)}>
          <div className={styles.overlayContent}>
            <div className={styles.list}>
              {list.map((el: ListTypes) => (
                <Link key={el.title} to={el.url}>
                  <span className={styles.item}>
                    <p>{el.title}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
