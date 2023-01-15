import { useEffect, useState } from 'react'
import personService from './services/persons'

import Filter from './components/Filter'
import Form from './components/Form'
import PersonList from './components/PersonList'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState(false)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    console.log("Fetching data from server")
    personService
      .getAll()
      .then(initialPersons => {
        console.log("Data received")
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log("Data not received")
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    
    const result = persons.some(person => person.name === newName)
    const newPerson = { name: newName, number: newNumber }

    if (result) {
      const answer = window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)
      if (answer) { 
        const personToChange = persons.find(person => person.name === newName)
        console.log(personToChange.id)
        personService
        .update(personToChange.id, newPerson)

        setErrorMsg(`Updated number for ${newName}`)
        setTimeout(() => {
          setErrorMsg(null)
        }, 3500)
      }
      else return
    }
    else {
      console.log("Adding person to server")

      personService
      .create(newPerson)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log("Person was not added to server")
      })

      setErrorMsg(`Added ${newPerson.name}`)
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)

      console.log("Person was added to server")
    }
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

  useEffect(() => {
    if (!filter) {
      setFilteredPersons(persons.filter( person => person.name.toLowerCase().includes(newSearch.toLowerCase())))
    }
    else {
      setFilteredPersons(persons)
    }
  }, [filter, persons, newSearch])

  const deletePerson = (props) => {
    console.log("attemping to delete")
    console.log(props.id)
    const answer = window.confirm(`Are you sure you want to delete this user?`)
    if (answer) {   
      personService
      .deletePerson(props.id)
      .catch(error => {
        console.log("Person was not deleted from server")
      })

      console.log("Person was deleted from server")
    }
    else return
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMsg} />

      <Filter value={newSearch} onChange={handleSearchChange}/>
      
      <h3>Add a new</h3>

      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>

      {/* <ul>
        {filteredPersons.map(person => 
          <Person person={person} key={person.id}/>
        )}
      </ul> */}

      <PersonList filteredPersons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
