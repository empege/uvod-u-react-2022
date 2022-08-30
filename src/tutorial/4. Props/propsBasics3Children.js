import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

function Listing() {

  const title2 = 'Title 2'
  const src2 = 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
  const text2 = 'Neki drugi tekst'

  const treciArtikal = {
    title: 'Title 3',
    src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    text: 'Neki treci tekst'
  }

  function foo() {
    return 'Vratili smo title iz funkcije'
    // return { a: 1 }
  }

  return (
    <section className='o-listing'>
      <Article
        title='title 1'
        src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
        text='Neki prvi tekst'
      />
      <Article title={title2} src={src2} text={text2}>
        <h1>OVO JE DETE DRUGOG ARTIKLA!</h1>
        <p>Neki tekst</p>
      </Article>
      <Article
        title={treciArtikal.title}
        src={treciArtikal.src}
        text={treciArtikal.text}
      />
      <Article
        title={foo()}
        src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
        text='Neki prvi tekst'
      />
    </section>
  )
}

const Article = (props) => {

  console.log(props)
  const { title, src, text, children } = props

  console.log(children);

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Listing />);
