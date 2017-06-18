import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import store from './store';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';
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
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

// Temporarily, do not use this, we need to test the impact of this on production.
// registerServiceWorker();

