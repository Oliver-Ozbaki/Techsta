import PropTypes from "prop-types";

import styles from "./Paragraph.module.scss";

Paragraph.propTypes = {
  utilities: PropTypes.string,
};

function Paragraph({ utilities, children }) {
  return (
    <p className={`${styles.paragraph} ${utilities ? utilities : ``}`}>
      {children}
    </p>
  );
}

export default Paragraph;
