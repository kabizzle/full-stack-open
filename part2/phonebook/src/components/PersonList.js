import Person from './Person'

const PersonList = ({filteredPersons}) => {
    return (
    <div>
        <ul>
            {filteredPersons.map(person => 
                <Person person={person} key={person.id}/>
            )}
        </ul>
    </div>

    )
}

export default PersonList