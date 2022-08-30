import React, { useState, useEffect } from 'react'
import User from './User'

const url = 'https://api.github.com/users';

const UseEffectBasiscs2 = () => {

  const [users, setUsers] = useState(null)

  // Async Await
  async function getUsers() {
    const response = await fetch(url)
    const usersData = await response.json()
    console.log(usersData)
    setUsers(usersData)
  }

  useEffect(() => {
    setTimeout(() => {
      getUsers()
    }, 5000)
  }, [])

  return (
    <div>
      <h1>UseEffectBasiscs2</h1>
      {
        users ? users.map((user) => {
          return <User key={user.id} {...user} />
        }) :
          <h1>Loading...</h1>
      }
    </div>
  )
}

export default UseEffectBasiscs2