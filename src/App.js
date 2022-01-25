import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeersPage';
import RandomBeer from './pages/RandomBeerPage';
import NewBeer from './pages/NewBeerPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beers" component={AllBeers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
