import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const IndivCommentP = styled.p`
    font-size: 13px;
    width: 100%;
    text-align: start;
    cursor: pointer;
`;

const IndivCommentSpan = styled.span`
    font-size: 15px;
    font-weight: bold;
`;

const CommentSection = props => {

    return(
        <div>
           <IndivCommentP><IndivCommentSpan>{props.comment.username} </IndivCommentSpan>{props.comment.text}</IndivCommentP>
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