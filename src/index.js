import React from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import ReactDOM from 'react-dom';
import App from './App';
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
// const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);