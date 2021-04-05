import { Switch, Route } from 'react-router-dom'

import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'

function Main(props) {
  return (
    <main className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Switch>
    </main>
  )
}

export default Main
