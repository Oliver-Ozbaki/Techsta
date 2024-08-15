import PropTypes from "prop-types";

import styles from "./Items.module.scss";

Items.propTypes = {
  organized: PropTypes.bool,
  elements: PropTypes.array,
};

function Items({ organized, elements }) {
  const mapElements = function () {
    return elements.map((node, index) => <li key={index}>{node}</li>);
  };

  return (
    <>
      {!organized && <ul className={styles.list}>{mapElements()}</ul>}
      {organized && <ol className={styles.list}>{mapElements()}</ol>}
    </>
  );
}

export default Items;
