import React, { Component } from "react";
import { Link } from 'react-router-dom';

class pagetwo extends Component {
    toPageOne() {
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <h3>This is Page Two</h3>
                <Link to="/">Page One</Link>
                <button onClick={this.toPageOne.bind(this)}>To Page One</button>
            </div>
        );
    }
}

export default pagetwo;