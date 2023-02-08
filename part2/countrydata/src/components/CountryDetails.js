const Languages = ({languages, keys}) => {
    return (
        <div>
            {keys.map(key => {
                console.log(languages[key]);
                return (
                    <ul key={key}>
                        <li>{languages[key]}</li>
                    </ul>
                )
            })}
        </div>
    )
}

const CountryDetails = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <br></br>
            <div id="Languages">                
                <h3>Languages</h3>
                <Languages languages={country.languages} keys={Object.keys(country.languages)}/>
                <img src={country.flags["png"]} alt="Country Flag"/>
            </div>
        </div>
    )
}

export default CountryDetails