import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import  Rootreducer  from './reducers';
import AppContainer from './AppContainer';

const store=createStore(Rootreducer);
ReactDOM.render(
  <Provider store={store}>
  <AppContainer />
  </Provider>,
  document.getElementById('root')
);

 