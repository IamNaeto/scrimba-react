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
          img={datas.coverImg}
          rating={datas.stats.rating}
          reviewCount={datas.stats.reviewCount}
          location={datas.location}
          title={datas.title}
          description={datas.description}
          price={datas.price}
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
