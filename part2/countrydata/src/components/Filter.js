const Filter = ({value, onChange}) => {
    return ( 
        <div>
            <form>Show countries with: <input value={value} onChange={onChange}/></form>
        </div>
    )
}

export default Filter