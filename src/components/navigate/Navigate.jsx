import PropTypes from "prop-types";

import styles from "./Navigate.module.scss";

Navigate.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.string,
  url: PropTypes.string,
  inline: PropTypes.object,
};

function Navigate({ type, style, url, inline, children }) {
  const Tag = type;

  const newProps = {
    ...(type !== `a` ? { to: url } : { href: url }),
  };

  return (
    <Tag
      className={`${styles.link} ${styles[`link--${style}`]}`}
      {...newProps}
      style={inline}
    >
      {children}
    </Tag>
  );
}

export default Navigate;
