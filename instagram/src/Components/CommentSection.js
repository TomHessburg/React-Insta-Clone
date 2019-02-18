import React from 'react';

const CommentSection = props => {

    return(
        <div className="individual-comment">
           <h3>{props.comment.username}</h3>
           <h3>{props.comment.text}</h3>
        </div>
    );
}



export default CommentSection;