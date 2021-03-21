import PokemonCard from '../../components/PokemonCard'
import { useState, useEffect } from 'react'
import database from '../../service/firebase'
import style from './style.module.css'

const GamePage = () => {

  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  const handleClick = (id, key) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.active = true;
          console.log('!!! poc key', key)
          database.ref('/pokemons/' + key).update({
            active: true,
          })
        }
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  }

  const addPokemone = () => {
    const newKey = database.ref().child('pokemons').push().key
    const newPokemon = Object.entries(pokemons)[Math.floor(Math.random() * 5)][1]
    database.ref('pokemons/' + newKey).set(newPokemon)
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val())
    })
  }

  return (
    <div className={style.game}>
      <h1>GamePage</h1>
      <div>
        <button onClick={addPokemone}>
          Add Pokemone
        </button>
      </div>
      <div className={style.pokemons}>
        { Object.entries(pokemons).map(([key, {name, active, type, img, id, values}]) =>
          <PokemonCard
            isActive={active}
            key={key}
            pocId={key}
            pocClick={() => handleClick(id, key)}
            id={id}
            name={name}
            type={type}
            img ={img}
            values ={values}
          />
        )}
      </div>
    </div>
  )
}

export default GamePage;