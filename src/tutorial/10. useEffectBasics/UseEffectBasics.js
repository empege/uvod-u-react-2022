import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {

  const [notifications, setNotifications] = useState(0)
  const [counter, setCounter] = useState(0)
  const [size, setSize] = useState(window.innerWidth)

  //by default after every state change and on first mount
  useEffect(() => {
    console.log('useEffect - notifications')

    if (notifications > 0) {
      document.title = `${notifications} new notifications!`
    }

    // Clean up fja
    return () => {
      console.log('Clean up')
    }
  }, [notifications])

  // second parameter
  useEffect(() => {
    console.log('Only after first render')
  }, [])

  const handleResize = () => {
    setSize(window.innerWidth)
  }


  // const x = 5;

  // const nesto = x * x;

  // setTimeout(() => { console.log(123) }, 2000)

  // function nekaf() {
  //   console.log(123)
  // }

  // const wth = 'wth'



  useEffect(() => {
    console.log('resized')
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  // }, [])

  // window.removeEventListener('resize', handleResize)
  // window.addEventListener('resize', handleResize)

  console.log('Component rendered')

  return (
    <div>
      <h1>UseEffectBasics</h1>
      <h3>Notifications:</h3>
      <h2>{notifications}</h2>
      <button className="btn" onClick={() => setNotifications(notifications + 1)}>New notification</button>
      <button className="btn" onClick={() => setCounter(counter + 1)}>Counter++</button>
      <h3>Size:</h3>
      <h1>{size}px</h1>
    </div>
  )
}

export default UseEffectBasics