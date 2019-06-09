import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    render() {
        const { handleInput, handleKeyPress, handleSearch } = this.props;
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={handleInput} onKeyPress={handleKeyPress}></input>
                <button type="button" onClick={handleSearch}>Search</button>
            </div>
        )
    }
}

SearchBar.propTypes = {
    handleInput: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;