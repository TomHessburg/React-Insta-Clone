import React from 'react';
import PostContainer from './PostContainer'


const PostsPage = props => {
    return (
        <div className="posts-page">


        
        { props.isLoading ? <div className="loading-text"> Loading...</div> : null }
        

        {props.data.filter(post => post.username
          .includes(props.searchInput))
          .map((post, index) => <PostContainer 
          data={post} 
          key={index} 


          likePost={props.likePost}
          unlikePost={props.unlikePost}

          handelComment={props.handelComment} 
          handelCommentSubmit={props.handelCommentSubmit}
          value={props.commentInput}
          />)}

      </div>
    )
}

export default PostsPage;
