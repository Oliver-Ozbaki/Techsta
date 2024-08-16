import PropTypes from "prop-types";

import Heading from "../../../../components/heading/Heading";
import Paragraph from "../../../../components/paragraph/Paragraph";

import styles from "./Hero.module.scss";

Hero.propTypes = {
  button: PropTypes.object,
  modifier: PropTypes.string,
};

function Hero({ button, modifier, children }) {
  return (
    <section className={`${styles.hero} u-section-padding`}>
      <div className={styles.heroTextWrapper}>
        <Heading level={1} utilities="u-margin-bottom-s">
          {children}
        </Heading>

        <Paragraph utilities="u-margin-bottom-s">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil harum
          dicta nisi deleniti dolore, sequi, vero maxime at dolorum impedit!
        </Paragraph>

        <div className={styles.heroButtonWrapper}>{button}</div>
      </div>
      <div
        className={`${styles.heroImageWrapper} ${
          styles[`heroImageWrapper${modifier}`]
        }`}
      ></div>
    </section>
  );
}

export default Hero;
