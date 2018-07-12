import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './reducers/reducer';
import AppContainer from './AppContainer';

const store=createStore(counterReducer);
ReactDOM.render(
  <Provider store={store}>
  <AppContainer />
  </Provider>,
  document.getElementById('root')
);

 