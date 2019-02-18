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
      searchInput: "" //search input comes from the search bar and is fed into the data before its mapped over
    }

  }

  handelSearchChange = e => {
    console.log("asdas")

    this.setState({
      searchInput: e.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <SearchBar 
        handelSearchChange={this.handelSearchChange}
        value={this.state.searchInput}
        />


        {this.state.data.filter(post => post.username.includes(this.state.searchInput)).map((post, index) => <PostContainer data={post} key={index}/>)}
      </div>
    );
  }
}

export default App;
