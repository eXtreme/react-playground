import React, { Component } from 'react';
import styles from './App.pcss';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';

class App extends Component {
    render() {
        return (
            <div styleName="app">
                <div styleName="header">
                  <h2>Welcome to React</h2>
                </div>
                <p styleName="intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                  <Link to="/test">test</Link>
                </p>
            </div>
        );
    }
}

App = CSSModules(App, styles);

export default App;
