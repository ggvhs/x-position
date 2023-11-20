import { useState, useEffect } from "react"
import './app.css'

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
    <div className="container">
    {/*Math.truc() used to remove float numbers*/}
      <h1 className="mouse-x-position"> X POSITION OF CURSOR IS {Math.trunc(mouseXposition.x)}</h1>
    </div>
  )
}

export default App
