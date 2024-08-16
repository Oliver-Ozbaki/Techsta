import { Link } from "react-router-dom";
import Frame from "../../components/frame/Frame";
import Header from "../../components/header/Header";
import Navigate from "../../components/navigate/Navigate";
import Main from "../../components/main/Main";
import Hero from "../home/components/hero/Hero";
import Posts from "./components/Posts";
import Contact from "../../components/contact/Contact";

function Blog() {
  return (
    <Frame>
      <Header>
        <Navigate type={Link} style="link" url="/home">
          Home
        </Navigate>
      </Header>

      <Main>
        <Hero
          button={
            <Navigate type="a" style="button" url="#posts">
              Posts
            </Navigate>
          }
          modifier="--blog"
        >
          <span>Connect</span> with the <span>community.</span>
        </Hero>

        <Posts />
      </Main>

      <Contact />
    </Frame>
  );
}

export default Blog;
