import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = [
  logger(), 
  thunk
];

const enhancers = compose(
  applyMiddleware(...middleware), 
  window.devToolsExtension ? window.devToolsExtension() : f => f 
);

/**
* CREATE STORE 
*/

const store = createStore(
  rootReducer, 
  {}, 
  enhancers
);

export default store