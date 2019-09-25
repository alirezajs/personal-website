import React, { Component } from 'react';
import './menu.component.scss'

class Menu extends Component{
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className="main-menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" >Top.Coder</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Menu;