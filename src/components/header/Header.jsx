import styles from "./Header.module.scss";

function Header({ children }) {
  function handleClick() {
    window.location.reload();
  }

  return (
    <header
      className={
        children ? `${styles.header} ${styles["header--home"]}` : styles.header
      }
    >
      <button className={styles.headerLogo} onClick={handleClick}>
        TECHSTA
      </button>

      {children}
    </header>
  );
}

export default Header;
