import { useState, useEffect } from "react"

function App() {

  const [mouseXposition, setMouseXPosition] = useState({x:0});



  useEffect(() => {
    const updateMouseXPosition = (event) => {
      setMouseXPosition({x: event.clientX})
    }

    window.addEventListener('pointermove',updateMouseXPosition)

    return () => {
      window.removeEventListener('pointermove', updateMouseXPosition)
    }
  }, [])

  return (
    <>
    {/*Math.truc() used to remove float numbers*/}
      <h1>{Math.trunc(mouseXposition.x)}</h1>
    </>
  )
}

export default App
