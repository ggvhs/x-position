import { useState, useEffect } from "react"

function App() {



  useEffect(() => {
    const changeNumber = () => {
      // logic
    }
    window.addEventListener('pointermove',changeNumber)
  })

  return (
    <>
      <h1> The width of my window is {window.innerWidth} px </h1>
      <h1>0</h1>
    </>
  )
}

export default App
