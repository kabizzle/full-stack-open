import { useState,useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

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
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
        .then(resp => {
            console.log("Weather data received")
            setWeatherData(resp.data)
            console.log(weatherData)
          })
          .catch(err => {
            console.log("Weather data was not fetched")
          })
    }, [country.capital])

    
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
            <div>
                <h3>Weather in {country.capital}</h3>
                {/* <p>Temperature: {(weatherData.main.temp - 273).toFixed(2)} Celsius</p> */}
            </div>
        </div>
    )
    
}

export default CountryDetails