import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/store';
import App from './components/App';

export default () => (
  <Router history={history}>
    <Route path="./Routes" component={App}>
    </Route>
  </Router>
);