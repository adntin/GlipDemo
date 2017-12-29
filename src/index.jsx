import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import Async from '@/components/Async'

// const Home = import(/* webpackChunkName: "home" */ 'Components/Home')
import Home from '@/components/Home'
import About from '@/components/About'
// const Home = () => <Async load={ import('./components/Home') } />
// const Home = asyncComponent(() => import('@/components/Home').then(module => module.default))

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
