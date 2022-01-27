import React from 'react';
import Header from "../components/Header";
import axios from 'axios';

class BeerDetails extends React.Component {
    state = {};

    getBeerDetails = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.params.match._id}`)
            .then((response) => {
                console.log('data= ', response.data)
                this.setState(response.data)
            })
            .catch((error) => {
                console.log('error= ', error)
            })
    }

    componentDidMount() {
        this.getBeerDetails()
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Beer details</h2>
                <img src={this.state.image_url} alt="Beer bottle" />
                <h1>{this.state.name}</h1>
                <div>{this.state.attenuation_level}</div>
                <h2>{this.state.tagline}</h2>
                <div>{this.state.first_brewed}</div>
                <p>{this.state.description}</p>
                <div>{this.state.contributed_by}</div>
            </div>
        )
    }
}

export default BeerDetails;