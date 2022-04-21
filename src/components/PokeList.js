import {useEffect, useState} from 'react'
import PokeCard from './PokeCard'
function PokeList() {
const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(res => res.json())
        .then(data => setPokemon(data.pokemon))
    }, [])
    return (
        pokemon ? pokemon.map(pokeman => <PokeCard key={pokeman.id} pokeman={pokeman} />) : 'Loading...'
    )
}
export default PokeList