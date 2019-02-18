import React from 'react';

const SearchBar = props => {

    return(
        <div className="search-bar">
            <i className="fab fa-instagram"></i>
            <img src="/Users/tomhessburg/Desktop/lambda/React-Insta-Clone/instagram/imgs/insta-text.png" />
            <input placeholder="Search..." 
            className="search-text" 
            value={props.value}
            onChange={props.handelSearchChange}
            />
            <img src=""/>
            <img src=""/>
            <img src=""/>
        </div>
    );
}



export default SearchBar;