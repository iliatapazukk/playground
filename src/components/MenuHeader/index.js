import { useState } from 'react'
import Menu from './Menu'
import Navbar from './Navbar';

const MenuHeader = () => {
  const [navState, setNavState] = useState(false)
  const handleClick = () => {
    setNavState(!navState)
  }

  return(
    <div>
      <Navbar isActive={navState} hamburgerClick={handleClick}/>
      <Menu isActive={navState}/>
    </div>
  );
}

export default MenuHeader