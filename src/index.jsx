import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

import Home from '@/components/Home';

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
      <NavLink to="/about">about</NavLink>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
