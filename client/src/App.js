import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Transactions from './components/Transaction'
import Customers from './components/Customer'
import Home from './components/Home'

const App = () => {
  return (
      <Router>
        <Navbar />
        <div className='appContainer'>
          <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/transactions' component={Transactions} />
            <Route path='/customers' component={Customers} />
            
          </Switch>
        </div>
      </Router>
  )
}

export default App
