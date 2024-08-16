import PropTypes from "prop-types";

import styles from "./Heading.module.scss";

Heading.propTypes = {
  level: PropTypes.number,
  utilities: PropTypes.string,
};

function Heading({ level, utilities = null, children }) {
  const Tag = `h${level}`;

  return (
    <Tag className={`${styles[`heading${level}`]} ${utilities}`}>
      <div
        className={
          level < 3
            ? `${styles.headingTextWrapper} ${
                level === 1 ? styles[`headingTextWrapper--1`] : ``
              }`
            : ``
        }
      >
        {children}
      </div>
    </Tag>
  );
}

export default Heading;
