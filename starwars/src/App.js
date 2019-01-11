import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageURL: 'https://swapi.co/api/people',
      nextPage: null,
      prevPage: null,
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.pageURL);
    // this.getCharacters()
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
        console.log(data);
        this.setState({ starwarsChars: data.results });
        this.setState({ nextPage: data.next});
        this.setState({ prevPage: data.previous})
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  handleNextPage = () => {
    if(this.state.nextPage === null){
      alert("Wow look at you Padawon! You've seen everybody. Hit Previous to revist our favorite characters!");
    }
    else {
    console.log(this);
    this.getCharacters(this.state.nextPage);
    this.setState({pageURL: this.state.nextPage});
  }}
  handlePrevPage = () => {
    if(this.state.prevPage === null){
      alert('Sorry nothing to see that way!')
    } else{
    console.log(this);
    this.getCharacters(this.state.prevPage);
    this.setState({pageURL: this.state.prevPage});
  }}
  // nextCharacters = URL => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ newChars: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

  showSaber(){

  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList 
        starwarsChars={this.state.starwarsChars}
        starwarsPlanets={this.state.starwarsPlanets}/>
        <button className="next"onClick={this.handlePrevPage} >Previous</button>
        <button className="next" onClick={this.handleNextPage}>Next</button>
      </div>
    );
  }
}

export default App;
