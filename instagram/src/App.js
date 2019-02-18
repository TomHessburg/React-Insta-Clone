import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import dummyData from './dummy-data'
import PostContainer from './Components/PostContainer'

class App extends Component {

  constructor(){
    super();

    this.state = {
      data: dummyData,
      searchInput: ""
    }

  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map((post, index) => <PostContainer data={post} key={index}/>)}
      </div>
    );
  }
}

export default App;
