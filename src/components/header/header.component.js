import React, { Component } from 'react';
import './header.component.scss'
import Menu from '../commons-components/menu/menu.component'




class Header extends Component {
    constructor() {
        super();
        this.state = {
            answer: "yes"
        }
    }
    render() {
        return (
            <header className="App-header" >
                <Menu />
            </header>
        );
    }
}

export default Header;