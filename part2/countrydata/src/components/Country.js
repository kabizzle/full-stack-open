import { useState } from "react";
import CountryDetails from "./CountryDetails"
// import ReactDOM from 'react-dom/client'

const Country = ({countries}) => {
    const [displayedCountry, setDisplayedCountry] = useState(countries[0])
    const [showCountry, setShowCountry] = useState(false)
    console.log("num of countries:", countries.length)

    // const handleClick = e => {
    //     setShowCountry(true)
    // }

    if (countries.length > 10) {
        if (showCountry) {setShowCountry(false)}
        return (
            <div>
                <p>Too many countries to display, narrow your search!</p>
            </div>
    )}
    else if (countries.length === 1) {
        // console.log(countries[0])
        // // console.log(Object.keys(displayedCountry.languages))
        // return (
            // <CountryDetails country={countries[0]}/>
        // )
        // setShowCountry(true)

        // setDisplayedCountry(countries[0])
        return (
            // <div><CountryDetails country={displayedCountry}/></div>
            <CountryDetails country={countries[0]}/>
        )
    }
    else if (countries.length <= 10 && countries.length > 1) {
        // const showCountry = () => {
        //     console.log(displayedCountry)
        //     return (<CountryDetails country={displayedCountry}/>)
        // }
        // <div>
        //     {countries.map(country => 
        //         <div>
        //             <p>{country.name.common}</p>
        //             <button onClick={() => {
        //                 setDisplayedCountry(country)
        //                 return (
        //                     <div><CountryDetails country={displayedCountry}/></div>
        //                 )}}>show</button>
        //         </div>)}
        // </div>
        // if (showCountry) {setShowCountry(false)}
        
        return (
            <div>
                {showCountry ? <CountryDetails country={displayedCountry}/>
                :<div>
                    {countries.map(country => 
                        <div key={country.name.common}>
                            <p>{country.name.common}</p>
                            <button onClick={() => {
                                setDisplayedCountry(country)
                                setShowCountry(true)
                            }}>show</button>
                    </div>)}
                    </div>}
            </div>
        )
    }


}

export default Country