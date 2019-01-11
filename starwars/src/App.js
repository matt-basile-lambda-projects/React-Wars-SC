import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarPlanets: [], 
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.getPlanets('https://swapi.co/api/planets');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  getPlanets = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarPlanets: data.results });
        
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList 
        starwarsChars={this.state.starwarsChars}
        starwarsPlanets={this.state.starwarsPlanets}/>
      </div>
    );
  }
}

export default App;
