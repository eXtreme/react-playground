import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Test extends Component {
    render() {
        return (
            <div>
                test <Link to="/">back</Link>
            </div>
        );
    }
}

export default Test;
