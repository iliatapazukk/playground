import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import HomePage from './routes/HomePage'
import GamePage from './routes/GamePage'
import AboutPage from './routes/AboutPage'
import ContactPage from './routes/ContactPage'
import NotFound from './routes/NotFound'
import cn from 'classnames'
import style from  './style.module.css'
import './index.css'

function App() {
  const match = useRouteMatch('/')
  return (
    <Switch>
      <Route path="/404" component={NotFound}/>
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact}/>
          <div className={cn(style.wrap, {[style.isHomepage] : match.isExact})}>
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/game" component={GamePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Route render={() => (
                <Redirect to="404"/>
              )}/>
            </Switch>
          </div>
        </>
      </Route>
      <Footer/>
    </Switch>
  )

}

export default App;
