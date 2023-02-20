import { useState , useEffect, useCallback } from 'react'
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
    const [weatherData, setWeatherData] = useState(null)
    // const [counter, setCounter] = useState(0)
    
    
    const fetchWeatherData = useCallback (async () => {
       await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
        .then(resp => {
            console.log("Weather data received")
            setWeatherData(resp.data)
        })
    }, [country.capital])

    useEffect(() => {

        fetchWeatherData()
        .catch(err => {
            console.log("Weather data was not fetched")
        })
    }, [fetchWeatherData])
    
    console.log(weatherData)
    // console.log(weatherData['main'].temp)
    // debugger

    
    if (weatherData) {
        console.log("weather icon code: ", weatherData['weather'][0].icon)
        let img_url = "http://openweathermap.org/img/wn/" + weatherData['weather'][0].icon + "@2x.png"
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
                    <p>Temperature: {(weatherData['main'].temp - 273).toFixed(2)} Celsius</p>
                    <img src={img_url} alt=''/>
                    <p>Temperature: {(weatherData['wind'].speed).toFixed(2)} m/s</p>
                </div>
            </div>
        )
    }
}

export default CountryDetails