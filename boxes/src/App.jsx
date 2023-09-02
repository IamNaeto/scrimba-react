import React from 'react'
import { useState } from 'react'
import './App.css'
import Box from '../components/Box'
import boxes from '../components/boxes'

function App() {
  const [squares, setSquares] = useState(boxes)
    
  function toggle(id) {
      setSquares(prevSquares => {
          return prevSquares.map((square) =>{
            return square.id === id ? {...square, on: !square.on} : square
          })
      })
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={toggle}
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
}

export default App
