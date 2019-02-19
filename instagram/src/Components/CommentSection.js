import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {

    return(
        <div className="individual-comment" >
           <p ><span>{props.comment.username} </span>{props.comment.text}</p>
        </div>
    );
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
        deleteComment: PropTypes.func
    })
}

export default CommentSection;