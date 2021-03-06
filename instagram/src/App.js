import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import dummyData from './dummy-data'
// import PostContainer from './Components/PostContainer'
import PostsPage from './Components/PostsPage'
import authenticate from './Components/authentication/authenticate'
import Login from './Components/login/Login'

import styled, { css } from 'styled-components';


const AppDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgb(250, 250, 250);
`;



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
    // localStorage.setItem("username", this.state.username);
    // localStorage.setItem("data", JSON.stringify(this.state.data));
    // //console.log(localStorage);
    // var data = JSON.parse(localStorage.getItem('data');
    // console.log(data)

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
      username: localStorage.getItem("username"),
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

  unlikePost = e => {
    console.log(e.target)

    this.setState({
      data: this.state.data.map(post => {
        if(e.target.id == 0){
          console.log(post.likes)
          post.likes = post.likes-1;

          e.target.id = 1; //I know this is stupid but it kind of works so whatever lol

          return post;
        }

        else{
          return post
        }
      })
    })


  }

  logOut = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }




  render() {
    
    return (
      <AppDiv>
          <SearchBar 
          handelSearchChange={this.handelSearchChange}
          value={this.state.searchInput}
          logOut={this.logOut}
          />


          <PostsPage 
          isLoading={this.state.isLoading} 
          data={this.state.data}
          searchInput={this.state.searchInput}
          commentInput={this.state.commentInput}
          likePost={this.likePost}
          unlikePost={this.unlikePost}
          handelComment={this.handelComment}
          handelCommentSubmit={this.handelCommentSubmit}
          />
      </AppDiv>
    );
  }
}


const authenticateApp = authenticate(App)(Login);


export default authenticateApp;
