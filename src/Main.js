import { Switch, Route } from 'react-router-dom'

import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
import AssetDetails from './Routes/AssetDetails'

function Main(props) {
  return (
    <main className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path={`/asset/:id`} component={AssetDetails} />
      </Switch>
    </main>
  )
}

export default Main
