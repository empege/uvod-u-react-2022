function UseStateBasics() {
  let title = 'Naslov'

  function handleClick() {

    title = "Novi naslov"
    console.log(title);
  }

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={handleClick}>Promeni naslov</button>
    </section>
  )
}

export default UseStateBasics