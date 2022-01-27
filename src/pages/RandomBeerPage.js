import React, { Component } from 'react';
import Header from "../components/Header";

class RandomBeer extends Component {
    render() {
        return (
            <div>
                <Header />
                <h2>Choose a beer</h2>
            </div>
        )
    }
}

export default RandomBeer;