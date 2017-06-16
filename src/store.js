import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from './history';

// main root reducer
const reducer = combineReducers({
    routing: routerReducer,
});

let middlewares = [routerMiddleware(history)];

let toCompose = [applyMiddleware(...middlewares)];

// enable redux devtools on dev env
if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./DevTools').default;

    // use chrome redux devtools if available, otherwise switch to in-site
    toCompose.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
}

// finally, create the store
const store = createStore(
    // root reducer
    reducer,
    // initial state
    {},
    // middlewares
    compose(...toCompose)
);

export default store;
