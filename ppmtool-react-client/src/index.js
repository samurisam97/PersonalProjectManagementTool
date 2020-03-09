import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';

const middlewares = [thunk];

const configureStore = initialState => {
  return createStore(reducer, initialState, applyMiddleware(...middlewares));
};

const store = configureStore();
console.log(store.getState());

// ACTION -> any action to be performed on the state
// const action_name = () => {
//     return{
//         type: 'ACTION_NAME'
//     }
// }

// DISPATCH -> sending of actions to reducer

// REDUCER -> Performs actions on the STORE

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
