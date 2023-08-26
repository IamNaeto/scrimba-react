import './App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Data from './Data'

function App() {
  
  const cardDetails = Data.map((datas) => {
    return (
      <Card
          openSpots={datas.openSpots} 
          key={datas.id}
          {...datas}
  />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardDetails}
      </section>
    </>
  )
}

export default App
