import React,{useState} from 'react'

export default function DisplaySearchResults(searchResults) {
    const [position, setPosition] = useState(0)

    const handleNext = () => {
        const maxPosition = (Object.values(searchResults).flat().length - 5)*-110;
        if (position>maxPosition){
            setPosition(position-110)
        }
    }

    
    let resultTiles = []
       Object.values(searchResults).forEach((value, index)=> {
            value.forEach((val, i)=> {
                console.log(value)
                resultTiles.push(<div className='result-tile'key={i}>
                    <h1>{val.cityName}</h1>
                    <h2>count: {val.count}</h2>
                </div>)
            })            
        })
            return (
            <>
                <div className="results-container">
                    <div style={{transform: `translate(${position}px)`}}>
                        {resultTiles}

                    </div>
                </div>
                <button onClick={handleNext}>Next</button>
            </>)
}
