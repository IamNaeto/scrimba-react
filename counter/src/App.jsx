import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function add() {
    setCount(prevCount => prevCount + 1)
  }
  function sub() {
    {count != 0 && setCount(prevCount => prevCount - 1)}
  }

  return (
      <div className="counter">
            <button className="counter--minus" onClick={sub}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
  )
}

export default App
