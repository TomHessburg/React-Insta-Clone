import React from 'react';

const CommentSection = props => {

    return(
        <div className="individual-comment">
           <p><span>{props.comment.username} </span>{props.comment.text}</p>
        </div>
    );
}



export default CommentSection;