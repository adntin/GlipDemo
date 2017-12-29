import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// const Home = import(/* webpackChunkName: "home" */ 'Components/Home')

import Home from 'Components/Home'

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

const APP = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
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
