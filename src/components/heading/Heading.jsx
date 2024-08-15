import PropTypes from "prop-types";

import styles from "./Heading.module.scss";

Heading.propTypes = {
  level: PropTypes.string,
};

function Heading({ level, children }) {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`${styles[`heading${level}`]} u-margin-bottom-s`}
      id="header"
    >
      <div className={styles.headingTextWrapper}>{children}</div>
    </Tag>
  );
}

export default Heading;
