import Jokes from './Jokes'
import JokesData from './JokesData'

function App() {
  const jokesArr = JokesData.map((JokesElement) => <Jokes Setup={JokesElement.setup} Punchline={JokesElement.punchline}/>)
  return (
    <div className='jokes-container'>
      {jokesArr}
    </div>
  )
}

export default App
