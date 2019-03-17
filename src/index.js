import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from "./components/App";

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
  name: "Lam Pham",
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
  combineReducers({ math: mathReducer, user: userReducer }),
  applyMiddleware(myLogger, logger)
);

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);