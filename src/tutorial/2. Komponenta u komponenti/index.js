import React from 'react'
import ReactDOM from 'react-dom/client'

function Listing() {
  return (
    <section>
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  )
}

const Article = () => {
  return (
    <article>
      <h3 className='title'>Article 1</h3>
      <img width="250" src="https://image.petmd.com/files/2022-06/Border-Collie.jpg" alt="dog" />
      <p>Text 1</p>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Listing />)