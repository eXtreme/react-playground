import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';
import history from './history';
import store from './store';

import App from './App';
import Test from './Test';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/*
 * Disable debugging the code in production using React Devtools
 */
if (
    process.env.NODE_ENV === 'production' &&
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/test" component={Test}/>
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

// Temporarily, use this, we need to test the impact of this on production.
registerServiceWorker();

