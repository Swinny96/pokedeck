import React, { useState } from 'react'
import usePokemon from '../hooks/usePokemon'
import useSearch from '../hooks/useSearch'
import BarSearch from './BarSearch'
import "./Card.css"

const Card = () => {
  const [pokemon, setPokemon] = useState({})
  const { handleInput, handleKeyPress, search } = useSearch(setPokemon)
  usePokemon(setPokemon)

  if (pokemon.data === undefined) {
    return null
  }

  const { name, stats } = pokemon.data
  return (
    <div className='container'>
      <BarSearch handleInput={handleInput} handleKeyPress={handleKeyPress} search={search} />
      <div className='card'>
        <div className='inner-card'>
            <p class="hp">
              <span>{stats[0].stat.name}</span> 
              {stats[0].base_stat}
            </p>
            <img
              src={pokemon.sprite}
              alt={name}
              className='card-image'
            />
          <h2 className='poke-name'>{name}</h2>
          <div className='stats'>
            <div className='stat'>
              <h3>{stats[1].base_stat}</h3>
              <p>{stats[1].stat.name}</p>
            </div>
            <div className='stat'>
              <h3>{stats[2].base_stat}</h3>
              <p>{stats[2].stat.name}</p>
            </div>
            <div className='stat'>
              <h3>{stats[5].base_stat}</h3>
              <p>{stats[5].stat.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
