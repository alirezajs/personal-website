import React, { Component } from 'react';
import './App.scss';

import Header from "./header/header.component";
import Footer from "./footer/footer.component";
import WelcomeArea from "./welcome-area/welcome-area.component";
import AboutArea from "./about-area/about-area.component";

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <div className="App-body">
          <WelcomeArea />
          <AboutArea />
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
