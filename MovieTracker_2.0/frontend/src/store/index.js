import { applyMiddleware, compose , createStore } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const env = process.env.NODE_ENV;

const composeEnhancers = 
  env === "development" &&
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }): compose;

const middlewares = 
  env === "development" ? applyMiddleware(thunk,logger) : applyMiddleware(thunk);
  
const enhancers = composeEnhancers(middlewares);

export default createStore(rootReducer, enhancers);