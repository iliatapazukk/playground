import { useHistory } from 'react-router-dom';
import style from './style.module.css';

const Header = ({title, description, onClickBtn}) => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/game')
  }
  return (
    <header className={style.root}>
      <div className={style.forest}/>
      <div className={style.silhouette}/>
      <div className={style.moon}/>

      <div className={style.container}>
        { title && (
          <h1>{title}</h1>
        )}
        { description && (
          <p>{description}</p>
        )}

        <button onClick={handleClick}>Start game</button>
      </div>
    </header>
  )
}

export default Header;