import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore,combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import  ThunkMiddleware  from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons'; 

const logger = createLogger();

const rootReducers= combineReducers({
  searchRobots, requestRobots  
})
const store = createStore(searchRobots, applyMiddleware(ThunkMiddleware, logger)) 

ReactDOM.render(
    <Provider store={store}>
<App /></Provider>, document.getElementById('root'));
registerServiceWorker();
