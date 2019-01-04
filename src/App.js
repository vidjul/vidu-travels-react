import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <HeroSection />
      </div>
    )
  }
}

export default App;
