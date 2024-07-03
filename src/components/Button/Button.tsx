import styles from "./Button.module.scss";
const Button = ({ Icon }: any) => {
  return (
    <button className={styles.btn}>
      <Icon className={styles.icon} />
    </button>
  );
};

export default Button;
