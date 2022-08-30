import React from 'react'
import ReactDOM from 'react-dom/client'

/* Pravila JSX-a:
  1. Svaki element / komponenta mora da ima closing tag (cak i br, img itd)
  2. Uvek vracamo jedan element / fragment (<React.Fragment /> / <>)
  3. Ako hocemo jsx u vise linija, koristimo ( ) posle returna
  4. HTML atribute pise sa camelCase ( onclick => onClick )
  5. class => className; for => htmlFor
*/

function Pozdrav() {
  return (
    <>
      <h1 className='title'>Hello Merkle!</h1>
      <br></br>
      <p>Random text</p>
    </>
  )

  // return React.createElement('h1', {}, React.createElement('p', {}, 'Jsx nije html!'))
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Pozdrav />)