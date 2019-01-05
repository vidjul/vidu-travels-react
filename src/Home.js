import React, { Component } from 'react';
import HeroSection from './HeroSection';
import SearchSection from './SearchSection';

class Home extends Component {
    render() {
        return (
            <div>
                <HeroSection />
                <SearchSection />
            </div>
        )
    }
}

export default Home;