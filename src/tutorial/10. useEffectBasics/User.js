import React from 'react'

const User = (props) => {
  const { login: username, avatar_url: img_src, url } = props;

  return (
    <article>
      <h1>{username}</h1>
      <img src={img_src} alt="proba" width="250" />
      <br />
      <a href={url}>Check ma page!</a>
    </article>
  )
}

export default User