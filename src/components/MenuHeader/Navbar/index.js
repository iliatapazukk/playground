import cn from 'classnames'
import { ReactComponent as Logo } from '../../../assets/img/lorem-lorem-1.svg'
import style from './style.module.css'


const Navbar = ({hamburgerClick, isActive}) => {
  const handleHamburgerClick = () => {
    hamburgerClick && hamburgerClick()
  }
  return(
    <nav className={style.root}>
      <div className={style.navWrapper}>
        <p className={style.brand}>
          <Logo /> Pokemon Game
        </p>

        <div
          role="button"
          onClick={handleHamburgerClick}
          className={cn(style.menuButton, {[style.active]: isActive})}>
          <span/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar