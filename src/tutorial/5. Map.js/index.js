import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

function Listing() {
  const articles = [
    {
      title: "Title 1",
      src: "https://image.petmd.com/files/2022-06/Border-Collie.jpg",
      text: "Text 1",
      id: 1
    },
    {
      title: "Title 2",
      src: "https://image.petmd.com/files/2022-06/Border-Collie.jpg",
      text: "Text 2",
      id: 2
    },
    {
      title: "Title 3",
      src: "https://image.petmd.com/files/2022-06/Border-Collie.jpg",
      text: "Text 1",
      id: 3
    },
    {
      title: "Title 4",
      src: "https://image.petmd.com/files/2022-06/Border-Collie.jpg",
      text: "Text 4",
      id: 4
    },
  ];

  return (
    <section className='o-listing'>
      {articles.map((article, index) => (
        <Article key={article.id} {...article} />
      ))}
    </section>
  );
}

const Article = (props) => {
  const { title, src, text, children } = props

  return (
    <article className='m-article' style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      {children}
      <h3 className="m-article__title">{title}</h3>
      <div className="m-article__content">
        <img
          src={src}
          width='250'
          alt={title}
        />
        <p style={{ lineHeight: '2' }}>{text}</p>
      </div>
    </article>
  )
}

const Implicit = () => <h1>Implicit return</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Listing />);
