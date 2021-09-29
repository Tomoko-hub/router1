import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageOne extends Component {
    toPageTwo() {
        this.props.history.push('/pagetwo');
    }

    render() {
        return(
            <div>
                <h3>This is Page One</h3>
                <Link to="/pagetwo">Page Two</Link>
                <button onClick={this.toPageTwo.bind(this)}>To page two</button>
            </div>
        );
    }
}

export default PageOne;