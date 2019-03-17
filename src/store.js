import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import math from './reducers/mathReducer';
import user from './reducers/userReducer';

import myLogger from './middlewares/loggerMiddleware';

const store = createStore(
  combineReducers({ math, user }),
  applyMiddleware(myLogger, logger, thunk)
);

export default store;