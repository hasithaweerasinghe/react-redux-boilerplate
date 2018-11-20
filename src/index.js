import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store/reducers';
import Logger from './store/util/Logger';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk, Logger)));
const app = (<Provider store={store}><App /></Provider>);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
