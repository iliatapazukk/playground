import PokemonCard from '../../components/PokemonCard'
import POKEMONS from '../../Pokemons.json'
import { useState } from 'react'
import style from './style.module.css'

const GamePage = () => {

  const [pokemons, setPocemons] = useState(POKEMONS)
  const [isPocemonActive, setPocemonActive] = useState(false)
  const handleClick = () => {
    setPocemonActive(!isPocemonActive)
    const newArr = POKEMONS.map(
      (current) => {
        const card = Object.assign({}, current)
        //как-то передать id
        card.active = true
        return card
      }
    )
    setPocemons(newArr)
    console.log(newArr)
  }
  return (
    <div className={style.game}>
      <h1>GamePage</h1>
      <div className={style.pokemons}>
        {pokemons.map(item =>
          <PokemonCard
            isActive={item.active}
            pocClick={handleClick}
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