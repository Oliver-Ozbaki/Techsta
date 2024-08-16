import { Link } from "react-router-dom";

import Frame from "../../components/frame/Frame";
import Header from "../../components/header/Header";
import Items from "../../components/items/Items";
import Navigate from "../../components/navigate/Navigate";
import Main from "../../components/main/Main";
import Hero from "./components/hero/Hero";
import Listings from "./components/listings/Listings";
import Contact from "../../components/contact/Contact";

import stylesHeader from "../../components/header/Header.module.scss";

const navLinks = [
  { type: `a`, style: `link`, url: `#listings`, title: `Listings` },
  { type: `a`, style: `link`, url: `#contact`, title: `Contact` },
  { type: Link, style: `link`, url: `/blog`, title: `Blog` },
];

function Home() {
  return (
    <Frame>
      <Header>
        <nav className={stylesHeader.headerNav}>
          <Items
            organized={false}
            elements={navLinks.map(({ type, style, url, title }) => (
              <Navigate type={type} style={style} url={url}>
                {title}
              </Navigate>
            ))}
          />
        </nav>
      </Header>

      <Main>
        <Hero />
        <Listings />
      </Main>

      <Contact />
    </Frame>
  );
}

export default Home;
