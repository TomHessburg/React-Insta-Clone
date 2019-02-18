import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import dummyData from './dummy-data'

class App extends Component {

  constructor(){
    super();

    this.state = {
      data: dummyData,
      searchInput: ""
    }

  }


  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
