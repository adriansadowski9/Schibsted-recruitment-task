import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0;

    ${theme.mq.desktop} {
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 15px;
    }
`;

const StyledHeader = styled.h1`
    display: flex;
    align-self: center;
    font-size: ${theme.font.size.big};
    margin: 0 0 10px 0;
    padding: 5px 10px;
    background: ${theme.blue};
    color: ${theme.white};
    text-transform: uppercase;
    cursor: pointer;
    ${theme.mq.desktop} {
        align-self: left;
        margin: 0;
    }
`;

const SearchContainer = styled.div`
    display: flex;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 7px 14px;
    font-family: ${theme.font.family.montserrat};
    color: ${theme.blue};
    border: 1px solid ${theme.blue};
    border-radius: 3px 0 0 3px;
    ::placeholder {
        color: ${theme.blue};
    }
`;
const StyledButton = styled.button`
    padding: 0 14px;
    font-family: ${theme.font.family.montserrat};
    color: ${theme.white};
    background: ${theme.blue};
    border: 1px solid ${theme.blue};
    border-left: none;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    transition: background .2s, color .2s;
    :hover {
        background: ${theme.white};
        color: ${theme.blue};
    }
`;

class SearchBar extends React.Component {
    render() {
        const { handleReset, inputValue, handleInput, handleKeyPress, handleSearch } = this.props;
        return (
            <Container>
                <StyledHeader onClick={handleReset}>Image finder</StyledHeader>
                <SearchContainer>
                <StyledInput type="text" placeholder="Type search query here..." value={inputValue} onChange={handleInput} onKeyPress={handleKeyPress}></StyledInput>
                <StyledButton type="button" onClick={handleSearch}>Search</StyledButton>
                </SearchContainer>
            </Container>
        )
    }
}

SearchBar.propTypes = {
    handleReset: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;