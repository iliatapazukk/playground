import style from './style.module.css';

const Header = ({title, description, onClickBtn}) => {
  const handleClick = () => {
    onClickBtn && onClickBtn('game')
  }
  return (
    <header className={style.root}>
      <div className={style.forest}/>
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