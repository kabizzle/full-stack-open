const PersonList = ({filteredPersons, deletePerson}) => {
    return (
    <div>
        <ul>
            {filteredPersons.map(person => 
                <div key={person.id}>
                    <li key={person.id}>{person.name} - {person.number}</li>
                    <button onClick={() => deletePerson(person)}>delete</button>
                </div>
            )}
        </ul>
    </div>

    )
}

export default PersonList