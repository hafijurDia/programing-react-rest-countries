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
      <h1>Country API Practice</h1>
      <div className="country-wrap">
      
      {
        countries.map(country => <><Country name={country.name.common} flag={country.flags.png} capital={country.capital} area={country.area} population={country.population}></Country></>)
      }
        </div>
    </div>
  )
}

function Country(Props){
  return(
    
      <div className='country'>
      <h3>Country name: {Props.name}</h3>
      <img style={{width:"150px"}} src={Props.flag} alt="" />
      <p>Capital: {Props.capital}</p>
      <p>Area: {Props.area}</p>
      <p>Population: {Props.population}</p>
      
    </div>
  
    
  )
}

export default App
