const Filter = ({value, onChange}) => {
    // const [newSearch, setNewSearch] = useState('')
    // const handleSearch = (e) => {
    //     console.log(e.target.value)

    //     setReturnVal(e.target.value)
    //     setNewSearch('')
    // }
    // const [returnVal, setReturnVal] = useState([, <div>hello</div>])
    
    // const personFiltered = persons.filter( person =>
    //     person.name.toLowerCase().includes(newSearch.toLowerCase()).map(
    //         filtered =>  ))

    return ( 
        <div>
            <form>Show names with: <input value={value} onChange={onChange}/></form>
        </div>
    )
}

export default Filter