import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

middlewares.push(thunk);
middlewares.push(promiseMiddleware());

let store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;