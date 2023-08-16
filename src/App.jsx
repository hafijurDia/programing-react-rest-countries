import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <LoadCountries></LoadCountries>
    </div>
  )
}

function LoadCountries(){

  const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  },[])

  return(
    <div>
      <h1>{countries.length}</h1>
    </div>
  )
}

export default App
