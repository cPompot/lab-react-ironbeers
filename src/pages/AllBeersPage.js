import React from 'react';
import Header from "../components/Header";
import axios from 'axios';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

class AllBeers extends React.Component {
    state = {
        listOfAllBeers: []
    }

    getAllBeers = () => {
        axios.get(apiURL)
            .then((response) => {
                console.log('data= ', response.data)
                this.setState({
                    listOfAllBeers: response.data
                })
            })
            .catch((error) => {
                console.log('error= ', error)
            })
    }

    componentDidMount() {
        this.getAllBeers()
    }

    render() {
        return(
            <div>
                <Header />
                <h2>Beers' List</h2>
                {this.state.listOfAllBeers.map((eachBeer) => {
                    return (
                        <div key={eachBeer._id}>
                            <img src={eachBeer.image_url}/>
                            <h1>{eachBeer.name}</h1>
                            <h2>{eachBeer.tagline}</h2>
                            <h3>Created by: {eachBeer.contributed_by}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AllBeers;