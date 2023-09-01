import { useState } from 'react'
import './App.css'
import Count from '../components/Count'

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
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
  )
}

export default App
