// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const mathReducer = (state = {
  result: 1,
  lastValues: [],
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
    default:
      break;
  }

  return state;
};

const userReducer = (state = {
  name: "Lam",
  age: 26
}, action) => {
  switch (action.type) {
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload,
      }
      break;
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;
    default:
      break;
  }

  return state;
};

const myLogger = (store) => (next) => (action) => {
  console.log("Logged action:", action);
  next(action);
};

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  applyMiddleware(myLogger, logger)
);

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 1
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "SUBTRACT",
  payload: 50
});

store.dispatch({
  type: "SET_NAME",
  payload: "Lam Pham"
});

store.dispatch({
  type: "SET_AGE",
  payload: 27
});