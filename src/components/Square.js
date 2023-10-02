import React from 'react'

export default function Square({value, onSquareclick}) {
    // const [value, setValue] = useState(null)
    // // let i = 1;
    // function handleClick() {
    //     if( i % 2 === 0 ) setValue('O')
    //     else setValue('X')
    //     console.log(i)
    //     // i++;
    //     console.log('clicked')
    // }
  return (
    <button className='square' onClick={onSquareclick}>{value}</button>
  )
}
