import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Intent } from "@blueprintjs/core";
import './Test.css';
import s from './Test.module.css';

class Test extends Component {
    render() {
        return (
            <div styleName="s.test-module">
                {/*<Button iconName="refresh" intent={Intent.PRIMARY}>Button</Button>*/}
                test <Link to="/" className="foo">back</Link>
            </div>
        );
    }
}

export default Test;
