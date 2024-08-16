import Row from "./components/Row";

import styles from "./Listings.module.scss";

const partTypes = [
  `video_card`,
  `cpu`,
  `cpu_coolers`,
  `memory`,
  `motherboard`,
  `storage`,
  `power_supply`,
  `cases`,
];

function Listings() {
  return (
    <section className={`${styles.listings} u-section-padding`} id="listings">
      {partTypes.map((type, index) => (
        <Row key={index} part={type} />
      ))}
    </section>
  );
}

export default Listings;
