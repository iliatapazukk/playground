import { useState } from 'react'

import HomePage from './routes/Home'
import GamePage from './routes/Game'
import './index.css'

function App() {
  const [page, setPage] = useState('app')
  const handleChangePage = (page) => {
    setPage(page)
  }
  switch (page){
    case 'app' :
      return <HomePage onChangePage={ handleChangePage }/>
    case 'game' :
      return <GamePage routeTo={ handleChangePage } />
    default:
      return <HomePage onChangePage={ handleChangePage }/>
  }

}

export default App;
