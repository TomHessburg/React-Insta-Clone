import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="full-post">


            <div className="top-of-post">
                <img src={props.data.thumbnailUrl} alt="thumbnail" />
                <h2>{props.data.username}</h2>
            </div>


            <img src={props.data.imageUrl} className="post-img" />


            <div className="just-above-comms">
                <div className="like-comment">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <h3 className="likes-text">{props.data.likes} likes</h3>
            </div>


            <div className="comments-section">
                {props.data.comments.map((comment, index) => {
                return <CommentSection key={index} comment={comment} />
                })}
            </div>
            <p className="timestamp">{props.data.timestamp}</p>
            
            
            <div className="leave-comment">
            <form onSubmit={props.handelCommentSubmit} id={props.data.id} >
                <input placeholder="Add a comment..." onChange={props.handelComment} value={props.value} />
                <i className="fas fa-ellipsis-v"></i>
            </form>
            </div>
        </div>
    );
}



PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl:PropTypes.string,
        imageUrl:PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })

}




export default PostContainer;

