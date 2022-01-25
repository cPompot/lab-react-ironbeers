import React from 'react';
import { Link } from 'react-router-dom';
import beersPic from './../assets/beers.png';
import randomBeerPic from './../assets/random-beer.png';
import newBeerPic from './../assets/new-beer.png';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/beers">
                    <div>
                        <img src={beersPic} alt="Beers" />
                        <h2>All Beers</h2>
                        <p>See all our beers</p>
                    </div>
                </Link>
                <Link to="/random-beer">
                    <div>
                        <img src={randomBeerPic} alt="Random Beer" />
                        <h2>Random Beer</h2>
                        <p>Choose a random beer</p>
                    </div>
                </Link>
                <Link to="/new-beer">
                    <div>
                        <img src={newBeerPic} alt="New Beer" />
                        <h2>New Beer</h2>
                        <p>Taste a new flavour</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default HomePage;