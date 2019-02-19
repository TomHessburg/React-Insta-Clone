import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {

    return(
        <div className="sarch-wrapper">
            <div className="search-bar">
                <div className="instagram-wrapper">
                    <i className="fab fa-instagram camera"></i>
                    <img className="insta-text" src="https://github.com/TomHessburg/React-Insta-Clone/blob/day-1-solution/instagram/src/assets/iglogo.png?raw=true"/>
                </div>
                
                <input placeholder="Search..." 
                className="search-text" 
                value={props.value}
                onChange={props.handelSearchChange}
                />


                <div className="social-wrapper">
                    <div className="social">
                        <i className="fa fa-compass" />
                    </div>
                    <div className="social">
                        <i className="fa fa-heart" />
                    </div>
                    <div className="social">
                        <i className="fa fa-user-circle" />
                    </div>
                </div>
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    handelSearchChange: PropTypes.func,
    value: PropTypes.string
}

export default SearchBar;