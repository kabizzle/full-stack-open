import {useState, useEffect} from 'react'
import axios from 'axios'

import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {
  const [countryData, setCountryData] = useState([]) 
  const [newSearch, setNewSearch] = useState('')

  // const [filter, setFilter] = useState(true)
  const [displayedCountries, setDisplayedCountries] = useState([])

  
  useEffect(() => {
    console.log("Fetching country data")
    
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(resp => {
      console.log("Data received")
      setCountryData(resp.data)
    })
    .catch(err => {
      console.log("Country data was not fetched")
    })

    // console.log(countryData)
  }, [])
  
  const handleSearchChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setNewSearch(e.target.value)
  } 

  useEffect(() => {
    setDisplayedCountries(countryData.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase())))
  }, [countryData, newSearch])

  return (
    <div>
      <h1>Country Search </h1>
      <Filter value={newSearch} onChange={handleSearchChange} />
      <div id='country'><Country countries={displayedCountries}/></div>
    </div>
  );
}

export default App;
