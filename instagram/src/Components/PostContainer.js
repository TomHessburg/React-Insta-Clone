import React from 'react';
import CommentSection from './CommentSection'

const PostContainer = props => {
    return (
        <div className="full-post">
            <div className="top-of-post">
                <img src={props.data.thumbnailUrl} alt="thumbnail" />
                <h2>{props.data.username}</h2>
            </div>
            
            <img src={props.data.imageUrl} className="post-img" />

            <div>
                <div className="like-comment">
                    <img src="like-btn" />
                    <img src="comment-btn" />
                </div>
                <h3>{props.data.likes}</h3>
            </div>


            <div className="comments-section">
                {props.data.comments.map((comment, index) => {
                return <CommentSection key={index} comment={comment} />
                })}
            </div>
        </div>
    );
}

export default PostContainer;

