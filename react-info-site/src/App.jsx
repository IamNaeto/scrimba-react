import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Body from '../components/Body'

function App() {
  const [darkMode, setDarkMode] = useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <Body darkMode={darkMode} />
      </div>
  )
}

export default App
