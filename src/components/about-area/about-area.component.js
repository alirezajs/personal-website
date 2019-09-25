import React, { Component } from 'react';
import './about-area.component.scss'


class AboutArea extends Component {
    constructor() {
        super();
        this.state = {}
    }
    DownloadCV() {
        alert();

    }
    render() {
        return (
            <div className="about-area">
                <h1>I Am Developer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ</p>
            </div>
        );
    }

}
export default AboutArea;