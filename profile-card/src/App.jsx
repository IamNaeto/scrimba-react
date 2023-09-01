import { useState } from 'react'
import './App.css'
import Star from '../components/Star'

function App() {
  const [contact, setContact] = useState({
    firstName: "Charles",
    lastName: "Egesionu",
    phone: "+234 (814) 737-1491",
    email: "egesionucharlesobimnaeto@gmail.com",
    isFavorite: false
})

let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

function toggleFavorite() {
    setContact(prevContact => {
        return{
          ...prevContact,
        isFavorite: !prevContact.isFavorite
        }
    })
}

return (
    <main>
        <article className="card">
            <img src="/src/assets/Charlie.png" className="card--image" alt='img'/>
            <div className="card--info">
                <Star icon={starIcon} handleToggle={toggleFavorite}/>
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    </main>
)
}

export default App
