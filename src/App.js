import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import asyncRoute from './asyncRoute';
import { withRouter } from 'react-router-dom';

// import Home from './components/Home';
const Home = asyncRoute(() => import('./components/Home'));
const Test = asyncRoute(() => import('./components/Test'));

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/test" component={Test}/>
            </Switch>
        );
    }
}

App = withRouter(App);

export default App;
