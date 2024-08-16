import PropTypes from "prop-types";

import styles from "./Button.module.scss";

Button.propTypes = {
  callback: PropTypes.func,
};
function Button({ callback, children }) {
  return (
    <button className={styles.button} onClick={callback}>
      {children}
    </button>
  );
}

export default Button;
