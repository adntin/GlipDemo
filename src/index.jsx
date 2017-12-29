import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import Async from '@/components/Async2'

import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

// import Home from '@/components/Home'
// import About from '@/components/About'

// const Home = () => <Async load={ import(/* webpackChunkName: "home" */'@/components/Home') } />
// const About = () => <Async load={ import(/* webpackChunkName: "about" */'@/components/About') } />

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */'@/components/Home'),
  loading: Loading,
})
const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */'@/components/About'),
  loading: Loading,
})

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
