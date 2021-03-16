import style from './style.module.css'
import MenuHeader from '../../components/MenuHeader'

const GamePage = ({routeTo}) => {
  const handleClick = () => {
    routeTo && routeTo('app')
  }
  return (
    <>
      <MenuHeader />
      <div className={style.game}>
        <h1>GamePage</h1>
        <button
          onClick={handleClick}
          className={style.button}>
          Go to Home Page
        </button>
      </div>
    </>
  )
}

export default GamePage;