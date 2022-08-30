import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./index.scss";

function Listing() {
  return (
    <section className="o-listing">
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  );
}

// Za vecu logiku pravimo funkciju i vracamo vrednost
const Article = () => {
  function multiply() {
    // if() {
    //   ...
    // }
    const a = 5;
    return a * 2;
  }

  let title = "Neki tekst";
  let src = "https://image.petmd.com/files/2022-06/Border-Collie.jpg";
  return (
    <article
      className="m-article"
      style={{ border: "2px solid red", marginBottom: "10px" }}
    >
      <h3 className="m-article__title">{title}</h3>
      <div className="m-article__content">
        <img
          width="250"
          src={src}
          alt="dog"
        />
        <p style={{ lineHeight: '2' }}>Text 1</p>
        <div>{2 + 2}</div>
        <div>{multiply()}</div>
        <div>{['jedan', 'dva', 'tri']}</div>

        {/* HTML ne podrzava objekte kao takve. Ako vratimo objekat u elementu, nece znati kako da ga procita, i izbacice gresku */}
        {/* <div>{{ a: 1, b: 2 }}</div> */}
        {/* <div>{['jedan', { a: 1, b: 2 }, 'tri']}</div> */}
      </div>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Listing />);
