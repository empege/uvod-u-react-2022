import React, { useState } from 'react'

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
  }

  const handleName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
    console.log(name)
  }

  return (
    // <form style={{ width: 'fit-content', margin: '20px auto' }} onSubmit={handleSubmit}>
    <form style={{ width: 'fit-content', margin: '20px auto' }}>
      <div className="m-article">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleName} />
      </div>

      <div className="m-article">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default ControlledInputs