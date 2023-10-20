import DisplaySearchResults from "../components/DisplaySearchResults";
import SearchBar from "../components/SearchBar"
import React, { useEffect, useState } from 'react'

export const SearchCityPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [citys, setCities] = useState([]);
    const [searchResults, setSearchResults] = useState([])

    const cities = useEffect(() => {
            fetch('http://localhost:3000/city').then(response => {
            return response.json()
        }).then( data => setCities(data))
    }, []);

    const handleSearch = (input) =>{
        setSearchInput(input)
        console.log('handlingSearch')
        // console.log(citys)
        console.log(input)
        setSearchResults(citys.filter(city => city.cityName.includes(input)))
        console.log(searchResults)

    }



    return (
        <div className="search-container">
            <SearchBar handleSearch={handleSearch}/>
            <div className="results-container">
            <DisplaySearchResults searchResults={searchResults}/>
            </div>
        </div>
    )
}