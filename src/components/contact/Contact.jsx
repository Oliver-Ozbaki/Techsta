import Navigate from "../navigate/Navigate";
import styles from "./Contact.module.scss";

const footerLinks = [
  {
    type: `a`,
    style: `link`,
    url: `mailto:random@example.com`,
    title: `random@example.com`,
  },
  {
    type: `a`,
    style: `link`,
    url: `tel:+48 55 444 333`,
    title: `+48 55 444 333`,
  },
  {
    type: `a`,
    style: `link`,
    url: `https://github.com/Oliver-Ozbaki/Techsta`,
    title: `github`,
  },
];
function Contact() {
  return (
    <footer className={`${styles.footer} u-section-padding`} id="contact">
      <div className={`${styles.footerSentence} u-section-padding`}>
        Achieve gaming heights with us.
      </div>

      <address className={`${styles.footerDetails} u-section-padding`}>
        {footerLinks.map(({ type, style, url, title }, index) => (
          <Navigate type={type} style={style} url={url}>
            {title}
          </Navigate>
        ))}
      </address>
    </footer>
  );
}

export default Contact;
