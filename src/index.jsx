<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom'
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Async from '@/components/Async2'
>>>>>>> aadfaac4c12cef563574315353e9aa5e6bf941ed

import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

<<<<<<< HEAD
import Home from '@/components/Home'
=======
// import Home from '@/components/Home'
// import About from '@/components/About'

// const Home = () => <Async load={ import(/* webpackChunkName: "home" */'@/components/Home') } />
// const About = () =>
//  <Async load={ import(/* webpackChunkName: "about" */'@/components/About') } />

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */'@/components/Home'),
  loading: Loading,
});
>>>>>>> aadfaac4c12cef563574315353e9aa5e6bf941ed
const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */'@/components/About'),
  loading: Loading,
});
const NoFound = Loadable({
  loader: () => import(/* webpackChunkName: "noFound" */'@/components/NoFound'),
  loading: Loading,
});

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/abc">no found</Link></li>
      </ul>
<<<<<<< HEAD
      <NavLink to='/about'>about</NavLink>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route component={NoFound}/>
      </Switch>
=======
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
>>>>>>> aadfaac4c12cef563574315353e9aa5e6bf941ed
    </div>
  </Router>
);

ReactDOM.render(
<<<<<<< HEAD
  <App />,
  document.getElementById('root')
)
=======
  <APP />,
  document.getElementById('root'),
);
>>>>>>> aadfaac4c12cef563574315353e9aa5e6bf941ed
