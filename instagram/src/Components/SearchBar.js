import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const Header = styled.div`
    display: flex;
    justify-content: center;
    min-width: 700px;
    background: white;
    border-bottom: 1px solid rgb(223, 223, 223);
`;

const SearchBarDiv = styled.div`
    min-width: 700px;
    max-width: 1100px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
`;

const InstagramWrapper = styled.div`
    display: flex;
    align-items: center;    
`;

const SocialWrapper = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-around;
    margin-right: 40px;
`;















const SearchBar = props => {

    return(
        <Header>
            <SearchBarDiv>
                <InstagramWrapper>
                    <i className="fab fa-instagram camera" onClick={props.logOut}></i>
                    <img className="insta-text" src="https://github.com/TomHessburg/React-Insta-Clone/blob/day-1-solution/instagram/src/assets/iglogo.png?raw=true"/>
                </InstagramWrapper>


                
                <input 
                placeholder="Search..." 
                className="search-text" 
                value={props.value}
                onChange={props.handelSearchChange}
                />


                <SocialWrapper>
                    <div className="social">
                        <i className="fa fa-compass" />
                    </div>
                    <div className="social">
                        <i className="fa fa-heart" />
                    </div>
                    <div className="social">
                        <i className="fa fa-user-circle" />
                    </div>
                </SocialWrapper>
            </SearchBarDiv>
        </Header>
    );
}

SearchBar.propTypes = {
    handelSearchChange: PropTypes.func,
    value: PropTypes.string
}

export default SearchBar;