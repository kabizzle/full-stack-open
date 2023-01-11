import { useEffect, useState } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Form from './components/Form'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([])

  const [filter, setFilter] = useState(true)

  const [newName, setNewName] = useState('')
  
  const [newNumber, setNewNumber] = useState('')

  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    console.log("Fetching data from server")
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        console.log("Data received")
        setPersons(response.data)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    
    const result = persons.some(person => person.name === newName)

    if (result) {
      alert(`${newName} is already in the phonebook`)
      return
    }

    const newPerson = { name: newName, number: newNumber, id:persons.length+1 }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setNewSearch(e.target.value)
    setFilter(false)
  } 

  const filteredPersons = filter
  ? persons
  : persons.filter( person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value={newSearch} onChange={handleSearchChange}/>
      
      <h3>Add a new</h3>

      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>

      {/* <ul>
        {filteredPersons.map(person => 
          <Person person={person} key={person.id}/>
        )}
      </ul> */}

      <PersonList filteredPersons={filteredPersons} />
    </div>
  )
}

export default App