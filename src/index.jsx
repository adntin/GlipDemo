import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// const Home = import(/* webpackChunkName: "home" */ 'Components/Home')
import Home from '@/Components/Home'
import About from '@/Components/About'

const APP = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

ReactDOM.render(
  <APP />,
  document.getElementById('root')
)
