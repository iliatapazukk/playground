import { Link } from 'react-router-dom'
import style from './style.module.css'
import cn from 'classnames'

const MENU = [
  {
    to: '/',
    title: 'HOME'
  },
  {
    to: 'game',
    title: 'GAME'
  },
  {
    to: 'about',
    title: 'ABOUT'
  },
  {
    to: 'contact',
    title: 'CONTACT'
  },
]
const Menu = ({isActive, menuState}) => {
  const handleLnkClick = () => {
    menuState && menuState(!isActive)
  }
  return (
    <div className={cn(style.menuContainer, {
        [style.deactive]:isActive === false,
        [style.active]:isActive=== true
    })}>
      <div className={style.overlay}/>
      <div className={style.menuItems}>
        <ul>
          {
            MENU.map(({title, to}, index) => (
              <li key={index}>
                <Link to={to} onClick={handleLnkClick}>{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu
