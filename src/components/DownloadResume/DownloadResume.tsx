import styles from "./DownloadResume.module.scss";
import { FiDownload } from "react-icons/fi";
import file from "../../assets/resume.pdf";
const DownloadResume = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
        Скачать резюме <FiDownload className={styles.icon} />
      </button>
    </div>
  );
};

export default DownloadResume;
