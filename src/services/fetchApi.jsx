import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'

export const fetchAllPokemons = () => {
  axios.get(baseUrl + 'pokemon?limit=1118').then(
    response => {
      console.log(response.data)
    }
  )
}

export const fetchPokemon = async (id) => {
  const { data } = await axios.get(baseUrl + `pokemon/${id}`)

  return {
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
    data: data
  }
}

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};