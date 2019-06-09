import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    render() {
        const { handleInput, handleSearch } = this.props;
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={handleInput}></input>
                <button type="button" onClick={handleSearch}>Search</button>
            </div>
        )
    }
}

SearchBar.propTypes = {
    handleInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;