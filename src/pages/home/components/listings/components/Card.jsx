import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Heading from "../../../../../components/heading/Heading";

import styles from "../Listings.module.scss";
import Button from "../../../../../components/button/Button";
import Paragraph from "../../../../../components/paragraph/Paragraph";

Card.propTypes = {
  partData: PropTypes.object,
};

function Card({ partData }) {
  const { part_name: partName, brand, description, price } = partData;
  const [displayInfo, setDisplayInfo] = useState(false);

  function handleClick() {
    setDisplayInfo(!displayInfo);
  }

  return (
    <>
      <article className={styles.listingsCard}>
        <span className={`${styles.listingsCardBrand} u-margin-bottom-xs`}>
          {brand}
        </span>
        <Heading level={3} utilities="u-margin-bottom-xs">
          {partName}
        </Heading>

        <Button callback={handleClick}>
          {!displayInfo ? `Discover` : `Hide`}
        </Button>
      </article>

      {displayInfo && (
        <div className={styles.listingsHidden}>
          <span className={`${styles.listingsCardBrand} u-margin-bottom-xs`}>
            Opis
          </span>

          <Paragraph utilities="u-margin-bottom-xs">{description}</Paragraph>

          <span className={styles.listingsPrice}>{price}$</span>
        </div>
      )}
    </>
  );
}

export default Card;
