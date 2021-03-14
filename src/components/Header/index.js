import style from './style.module.css';

const Header = ({title, description}) => {

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
      </div>
    </header>
  )
}

export default Header;