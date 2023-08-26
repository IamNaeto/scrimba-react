import './App.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Data from '../components/Data'

function App() {

  const journalData = Data.map((details) =>{
    return(
      <Hero {...details} />
    )
  })
  return (
    <>
      <Nav />
      <section className='hero-container'>
        {journalData}
      </section>
    </>
  )
}

export default App
