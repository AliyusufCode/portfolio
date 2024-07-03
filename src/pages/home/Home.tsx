import Me from "../../components/Me/Me";
import Sidebar from "../../components/Sidebar/Sidebar";
import WebDev from "../../components/WebDev/WebDev";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import Portfolio from "../portfolio/Portfolio";
import styles from "./home.module.scss";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      {location.pathname !== "/contacts" && <Sidebar />}

      <div className={styles.main}>
        {location.pathname === "/" && (
          <>
            <Me />
            <WebDev />
          </>
        )}
        {location.pathname === "/about" && <About />}
        {location.pathname === "/portfolio" && <Portfolio />}
        {location.pathname === "/contacts" && <Contacts />}
      </div>
    </div>
  );
};

export default Home;
