import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { API_ENDPOINT } from "../../../../../config/config";
import { timeoutPromise } from "../../../../../helpers/timeout";

import Heading from "../../../../../components/heading/Heading";
import Items from "../../../../../components/items/Items";
import Paragraph from "../../../../../components/paragraph/Paragraph";
import Card from "./Card";

import styles from "../Listings.module.scss";

Row.propTypes = {
  part: PropTypes.string,
};

function Row({ part }) {
  const [partsLoading, setPartsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(``);
  const [fetchedData, setFetchedData] = useState([]);

  const titleBase = part.replace(`_`, ` `);
  const finalTitle = titleBase.at(0).toUpperCase() + titleBase.slice(1);

  useEffect(
    function () {
      (async () => {
        try {
          setPartsLoading(true);

          const response = await fetch(API_ENDPOINT + part.replace(`_`, ``));
          console.log(response);

          if (!response.ok)
            throw new Error(`There was a problem fetching the data.`);

          const data = await response.json();
          console.log(data);

          await timeoutPromise(2);
          setFetchedData(data);
        } catch (err) {
          console.log(err);
          setErrorMessage(err.message);
        } finally {
          setPartsLoading(false);
        }
      })();
    },
    [part]
  );
  return (
    <div className="u-margin-bottom-s">
      <Heading level={2} utilities="u-margin-bottom-s">
        {finalTitle}
      </Heading>

      {partsLoading && (
        <div className={styles.listingsSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div className={styles.listingsSpinnerDot}></div>
        </div>
      )}

      {errorMessage && <Paragraph>errorMessage</Paragraph>}

      {fetchedData && (
        <Items
          organized={false}
          elements={fetchedData.map((data) => (
            <Card partData={data} />
          ))}
        />
      )}
    </div>
  );
}

export default Row;
