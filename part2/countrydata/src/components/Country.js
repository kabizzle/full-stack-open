import CountryDetails from "./CountryDetails"

const Country = ({countries}) => {
    console.log("1234")
    console.log("num of countries:", countries.length)

    if (countries.length === 1) {
        return (
            <div>
                <h2>{countries[0].name.common}</h2>
            </div>
        )
    }
    else if (countries.length <= 10){
        return (
        <div>
            {countries.map(country => 
                <div key={country.name.official}>
                    <p>{country.name.common}</p>
                </div>)}
        </div>
        )
    }
    else {return (
        <div>
            <p>Too many countries to display, narrow your search!</p>
        </div>
    )}
}

export default Country