import PokemonCard from '../../../../components/PokemonCard'
import { useState, useEffect, useContext } from 'react'
import {FirebaseContext} from "../../../../constext/FirebaseContext"
import s from './style.module.css'

const StartPage = () => {

  const firebase = useContext(FirebaseContext)
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons)
    })
    return () => firebase.offPokemonesOnce()
  }, [])

  const handleClick = (key) => {
    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected
      }
    }))
  }


  return (
    <div className={s.game}>
      <h1>GamePage</h1>
      <div>
        <button>
          Start Game
        </button>
      </div>
      <div className={s.pokemons}>
        { Object.entries(pokemons).map(([key, {name, selected, type, img, id, values}]) =>
          <PokemonCard
            className={s.selected}
            isActive={true}
            key={key}
            pocId={key}
            pocClick={() => handleClick(key)}
            id={id}
            name={name}
            type={type}
            img ={img}
            isSelected={selected}
            values ={values}
          />
        )}
      </div>
    </div>
  )
}

export default StartPage;