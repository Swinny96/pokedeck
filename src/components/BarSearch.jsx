import React from 'react'

const BarSearch = ({ handleInput, handleKeyPress, search }) => {
  return (
      <input
        type='text'
        className='Searchbar'
        placeholder='Find your pokemon...'
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        value={search}
      />
  )
}

export default BarSearch
