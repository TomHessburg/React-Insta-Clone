import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';


const FullPost = styled.div`
    border: 1px solid rgb(233, 233, 233);
    width: 640px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 5px 10px;
    background: white;
`;

const TopOfPost = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
`;


const TOPH2 = styled.div`
    font-size: 17px;
`;

const PostImg = styled.img`
    width: 100%;
    margin-bottom: 20px;
`;

const JustAboveComs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;
    margin: auto;
`;

const LikeComment = styled.div`
    width: 60px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;
const LikesText = styled.h3`
    font-size: 15px;
`;

const CommentsSection = styled.div`
    width: 95%;
    margin: auto;
`;

const TimeStampe = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    color: gray;
    font-size: 12px;
    width: 95%;
    margin: auto;
`;

const LeaveComment = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgb(213, 213, 213);
`;

const LCInput = styled.input`
    width: 80%;
    height: 25px;
    padding: 5px;
    margin-bottom: 10px;
    margin-right: 90px;
    border: none;
    font-size: 14px;
`;



const PostContainer = props => {
    return (
        <FullPost>
            <TopOfPost className="top-of-post">
                <img src={props.data.thumbnailUrl} alt="thumbnail" />
                <TOPH2>{props.data.username}</TOPH2>
            </TopOfPost>
            <PostImg src={props.data.imageUrl} className="post-img" />
            <JustAboveComs>
                <LikeComment>
                    <i onClick={props.likePost} onDoubleClick={props.unlikePost} id={props.data.id} className="far fa-heart" ></i>
                    <i className="far fa-comment"></i>
                </LikeComment>
                <LikesText>{props.data.likes} likes</LikesText>
            </JustAboveComs>
            <CommentsSection>
                {props.data.comments.map((comment, index) => {
                return <CommentSection key={index} comment={comment} />
                })}
            </CommentsSection>
            <TimeStampe>{props.data.timestamp}</TimeStampe>
            


            <LeaveComment>
                <form onSubmit={props.handelCommentSubmit} id={props.data.id} >
                    <LCInput placeholder="Add a comment..." onChange={props.handelComment} value={props.value} />
                    <i className="fas fa-ellipsis-v"></i>
                </form>
            </LeaveComment>
        </FullPost>
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
    }),
    handelCommentSubmit: PropTypes.func,
    handelComment: PropTypes.func,
    value: PropTypes.string,
    likePost: PropTypes.func,
    deleteComment: PropTypes.func

}
export default PostContainer;

