import { Link } from "react-router-dom";

import styles from "./Navigate.module.scss";

function Navigate({ type, style, url, title }) {
  return type === `a` ? (
    <a className={styles[style]} href={url}>
      {title}
    </a>
  ) : (
    <Link className={styles[style]} to={url}>
      {title}
    </Link>
  );
}

export default Navigate;
