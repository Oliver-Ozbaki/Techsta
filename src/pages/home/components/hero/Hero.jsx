import Heading from "../../../../components/heading/Heading";
import Paragraph from "../../../../components/paragraph/Paragraph";
import Navigate from "../../../../components/navigate/Navigate";

import styles from "./Hero.module.scss";
import stylesHeading from "../../../../components/heading/Heading.module.scss";

function Hero() {
  return (
    <section className={`${styles.hero} u-section-padding`}>
      <div className={styles.heroTextWrapper}>
        <Heading level={1} utilities="u-margin-bottom-s">
          <span className={stylesHeading.headingHighlight}>
            Powerful computing
          </span>{" "}
          for the most demanding.
        </Heading>

        <Paragraph utilities="u-margin-bottom-m">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil harum
          dicta nisi deleniti dolore, sequi, vero maxime at dolorum impedit!
        </Paragraph>

        <div className={styles.heroButtonWrapper}>
          <Navigate type="a" style="button" url="#products">
            Listings
          </Navigate>
        </div>
      </div>
      <div className={styles.heroImageWrapper}></div>
    </section>
  );
}

export default Hero;
