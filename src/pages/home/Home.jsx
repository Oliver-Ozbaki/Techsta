import Frame from "../../components/frame/Frame";
import Header from "../../components/header/Header";
import Items from "../../components/items/Items";
import Navigate from "../../components/navigate/Navigate";

import stylesHeader from "../../components/header/Header.module.scss";

const navLinks = [
  { type: `a`, style: `link`, url: `#products`, title: `Products` },
  { type: `a`, style: `link`, url: `#contact`, title: `Contact` },
  { type: `Link`, style: `link`, url: `/blog`, title: `Blog` },
];

function Home() {
  return (
    <Frame>
      <Header>
        <nav className={stylesHeader.headerNav}>
          <Items
            organized={false}
            elements={navLinks.map(({ type, style, url, title }) => (
              <Navigate type={type} style={style} url={url} title={title} />
            ))}
          />
        </nav>
      </Header>
    </Frame>
  );
}

export default Home;
