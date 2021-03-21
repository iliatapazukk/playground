import PokemonCard from '../../components/PokemonCard'
import POKEMONS from '../../Pokemons.json'
import { useState } from 'react'
import style from './style.module.css'

const GamePage = () => {

  const [pokemons, setPokemons] = useState(JSON.parse(JSON.stringify(POKEMONS)))
  const handleClick = (id) => {
    setPokemons(prevState => prevState.map(item => item.id === id ? { ...item, active: !item.active } : item))
  }
  return (
    <div className={style.game}>
      <h1>GamePage</h1>
      <div className={style.pokemons}>
        {pokemons.map((item) =>
          <PokemonCard
            isActive={item.active}
            pocClick={() => handleClick(item.id)}
            key={item.id}
            id={item.id}
            name={item.name}
            type ={item.type}
            img ={item.img}
            values ={item.values}
          />
        )}
      </div>
    </div>
  )
}

export default GamePage;