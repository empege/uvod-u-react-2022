import React, { useState } from "react";

function UseStateBasics() {
  // const state = useState('State Vrednost')
  // const stateVrednost = state[0]
  // const stateFunkcija = state[1]

  // const [stateVrednost, stateFunkcija] = [vrednost, funkcija]
  const [title, setTitle] = useState("Naslov 1");
  console.log(title, setTitle);

  const [text, setText] = useState("Text 1");
  const [niz, setNiz] = useState([1, 2, 3]);
  const [obj, setObj] = useState({
    name: "Ime",
    age: 12,
    mess: "Hello",
  });

  // Ne moze se inicijalizovati kondicionalno
  // const x = 5;
  // if (x = 1) {
  //   const [title, setTitle] = useState('NASLOV')
  // }

  function changeTitle() {
    if (title === "Naslov 1") {
      setTitle("Novi naslov 2");
    } else {
      setTitle("Naslov 1");
    }
    setText("Text 2");

    setNiz([]);

    setObj({ ...obj, mess: "Caooo" });
  }

  return (
    <div>
      <h1>{title}</h1>
      <div>{text}</div>
      <p>
        {niz.map((el, index) => (
          <h4 key={index}>{el}</h4>
        ))}
      </p>
      <h4>{obj.name}</h4>
      <h5>{obj.age}</h5>
      <h5>{obj.mess}</h5>
      <button onClick={changeTitle}>Promenili smo naslov</button>
      <button onClick={() => setText('Noviiiiii')}>Promenili smo naslov</button>
    </div>
  );
}

export default UseStateBasics;
