import React, { Component } from 'react';
import './welcome-area.component.scss'


class WelcomeArea extends Component {
    constructor() {
        super();
        this.state = {
            countDownload: 0
        }
    }
    downloadCV() {
        this.setState({ countDownload: 1 });
    }
    render() {
        return (
            <div className="welcome-area">
                <h1>My Name is Alireza Varmaghani</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button onClick={this.downloadCV} type="button" className="btn btn-primary"  >Download CV ({this.state.countDownload})</button>
            </div>
        );
    }

}
export default WelcomeArea;