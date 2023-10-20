import React, { useRef, useState } from 'react'

export default function SearchBar({handleSearch}) {
    const searchInput = useRef();

    const handleClick = () => {
        handleSearch(searchInput.current.value)
    }

  return (
    <div className='input-button-contain'>
        <input ref={searchInput} type='text' placeholder='Seach For City' /><button onClick={() => handleClick()}>Search</button>
    </div>
  )
}
