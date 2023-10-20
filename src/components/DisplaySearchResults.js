import React from 'react'

export default function DisplaySearchResults(searchResults) {
    
    let resultTiles = []
       Object.values(searchResults).forEach((value, index)=> {
            value.forEach((val, i)=> {
                resultTiles.push(<div className='result-tile'key={i}>
                    <h1>name: {val.cityName}</h1>
                </div>)
            })            
        })
        return (resultTiles)
}
