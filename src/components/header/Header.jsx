import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";

function Header({ children }) {
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();

  function handleClick() {
    navigate(currentPath.includes(`home`) ? `/home` : `/blog`);
    window.location.reload();
  }

  return (
    <header
      className={`${
        children ? `${styles.header} ${styles["header--home"]}` : styles.header
      } u-section-padding`}
    >
      <button className={styles.headerLogo} onClick={handleClick}>
        TECHSTA
      </button>

      {children}
    </header>
  );
}

export default Header;
