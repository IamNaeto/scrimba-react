import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  })

  console.log(formData)

  function handleChange(event){
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form>
      <input 
      type="text"
      onChange={handleChange}
      placeholder='First Name'
      name='firstName'
      value={formData.firstName}
      />

      <input 
      type="text"
      onChange={handleChange}
      placeholder='Last Name'
      name='lastName'
      value={formData.last}
      />

      <input 
      type="text"
      onChange={handleChange}
      placeholder='Email'
      name='email'
      value={formData.email}
      />

      <textarea 
      value={formData.comments}
      placeholder="Comments"
      onChange={handleChange}
      name="comments"
      />
    </form>
  )
}

export default App
