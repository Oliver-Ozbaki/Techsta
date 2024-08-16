import styles from "./Frame.module.scss";

function Frame({ children }) {
  return <div className={styles.frame}>{children}</div>;
}

export default Frame;
