import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.module.css';

class Home extends Component {
    render() {
        return (
            <div styleName="app">
                <p>home <Link to="/test">test</Link></p>
            </div>
        )
    }
}

export default Home;
