import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import dummyData from './dummy-data'
import PostContainer from './Components/PostContainer'

class App extends Component {

  constructor(){
    super();

    this.state = {
      data: [],
      searchInput: "", //search input comes from the search bar and is fed into the data before its mapped over
      username: "tom",
      commentInput: "",
      isLoading: true
    }
  }

  componentDidMount(){

    setTimeout(() => {
      this.setState({
        data: dummyData,
        isLoading: false
      })
    }, 1000)
  }


  handelComment = e => {
  
    this.setState({
      commentInput: e.target.value
    })
  }

  handelCommentSubmit = e => {
    e.preventDefault();

    const newComment = {
      username: this.state.username,
      text: this.state.commentInput
    }


    this.setState({
      data: this.state.data.map(post => {
        if(post.id == e.target.id){
          post.comments = [...post.comments, newComment]
          return post
        }

        else{
          return post
        }
      }),
      commentInput: ""
    })
  }

  handelSearchChange = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  likePost = e => {
    console.log(e.target)

    this.setState({
      data: this.state.data.map(post => {
        if(post.id == e.target.id){
          post.likes = post.likes+1;

          e.target.id = 0; //just for now so you can only like the post once

          return post;
        }

        else{
          return post
        }
      })
    })


  }

  render() {
    return (
      <div className="App">
        <SearchBar 
        handelSearchChange={this.handelSearchChange}
        value={this.state.searchInput}
        />

        { this.state.isLoading ? <div className="loading-text"> Loading...</div> : null }
        

        {this.state.data.filter(post => post.username
          .includes(this.state.searchInput))
          .map((post, index) => <PostContainer 
          data={post} 
          key={index} 
          likePost={this.likePost}
          handelComment={this.handelComment} 
          handelCommentSubmit={this.handelCommentSubmit}
          value={this.state.commentInput}
          />)}
      </div>
    );
  }
}

export default App;
