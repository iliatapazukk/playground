import { useState } from 'react'
import Menu from './Menu'
import Navbar from './Navbar';

const MenuHeader = ({bgActive}) => {
  const [navState, setNavState] = useState(null)
  const handleClick = () => {
    setNavState((prev) => !prev)
  }

  return(
    <div>
      <Navbar
        isActive={navState}
        bgActive={bgActive}
        hamburgerClick={handleClick}/>
      <Menu
        isActive={navState}
        menuState={handleClick}/>
    </div>
  );
}

export default MenuHeader