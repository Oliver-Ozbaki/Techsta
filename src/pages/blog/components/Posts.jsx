import { useEffect, useRef, useState } from "react";
import Button from "../../../components/button/Button";
import Heading from "../../../components/heading/Heading";
import styles from "./Posts.module.scss";
import Paragraph from "../../../components/paragraph/Paragraph";

const initialValues = {
  usernameValue: ``,
  titleValue: ``,
  contentValue: ``,
};

const initialPosts = [
  {
    username: `Username`,
    title: `Some title that comes to mind.`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus provident maxime consectetur doloremque corrupti obcaecati id labore explicabo, qui, illum eaque, delectus minus. Veniam impedit voluptates itaque odio veritatis.`,
  },
  {
    username: `Username`,
    title: `Some title that comes to mind.`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus provident maxime consectetur doloremque corrupti obcaecati id labore explicabo, qui, illum eaque, delectus minus. Veniam impedit voluptates itaque odio veritatis.`,
  },
];

function Posts() {
  const [inputValues, setValues] = useState(initialValues);

  const [storedPosts, setStoredPosts] = useState(initialPosts);
  console.log(storedPosts);
  const formEl = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(formEl.current);
    const dataObject = [...formData].reduce(
      (acc, array) => ({ ...acc, [array.at(0)]: array.at(1) }),
      {}
    );

    localStorage.setItem(
      `storedPosts`,
      JSON.stringify([...storedPosts, dataObject])
    );
    setValues(initialValues);
    setStoredPosts((state) => [...state, dataObject]);
  }

  function handleValue(e) {
    setValues((state) => ({
      ...state,
      [`${e.target.name}Value`]: e.target.value,
    }));
  }

  useEffect(function () {
    const checkStorage = localStorage.getItem(`storedPosts`);
    console.log(checkStorage);

    checkStorage && setStoredPosts(JSON.parse(checkStorage));
  }, []);

  return (
    <section className={`${styles.posts} u-section-padding`}>
      <Heading level={2} utilities="u-margin-bottom-m">
        Share your thoughts.
      </Heading>

      <form
        ref={formEl}
        name="post"
        className="u-margin-bottom-m"
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.postsFieldset}>
          {[`username`, `title`].map((name, index) => {
            const caseName = name.slice(0, 1).toUpperCase() + name.slice(1);

            return (
              <div
                key={index}
                className={`${styles.postsInputWrapper} u-margin-bottom-xs`}
              >
                <label className={styles.postsLabel} htmlFor={name}>
                  {caseName}.
                </label>
                <input
                  className={styles.postsInput}
                  type="text"
                  name={name}
                  id={name}
                  placeholder={caseName}
                  required
                  value={inputValues[name + `Value`]}
                  onChange={handleValue}
                />
              </div>
            );
          })}

          <div className={`${styles.postsInputWrapper} u-margin-bottom-m`}>
            <label className={styles.postsLabel} htmlFor="text">
              Content.
            </label>
            <textarea
              className={styles.postsInput}
              name="content"
              id="text"
              minLength="20"
              placeholder="Content"
              required
              value={inputValues.contentValue}
              onChange={handleValue}
            ></textarea>
          </div>

          <Button>Submit</Button>
        </fieldset>
      </form>

      <div className={styles.postsGrid}>
        {storedPosts.map((object, index) => (
          <article key={index} className={styles.postsArticle}>
            <span className={`${styles.postsUsername} u-margin-bottom-xs`}>
              {object.username}
            </span>

            <Heading level={3} utilities="u-margin-bottom-xs">
              {object.title}
            </Heading>

            <Paragraph>{object.content}</Paragraph>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Posts;
