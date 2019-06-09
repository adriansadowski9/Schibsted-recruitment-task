import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
`;
const StyledButton = styled.button`
    background: ${theme.blue};
    color: ${theme.white};
    border: 1px solid ${theme.blue};
    border-radius: 3px;
    padding: 7px 14px;
    cursor: pointer;
    margin-left: 15px;
    transition: background .2s, color .2s;
    :hover {
        background: ${theme.white};
        color: ${theme.blue};
    }

`;

class BottomBar extends React.Component {
    render() {
        const { page, handleNewPage } = this.props;
        return (
            <Container>
                {page > 1 ? <StyledButton type="button" onClick={() => { handleNewPage(page - 1) }}>Previous page</StyledButton> : ''}
                <StyledButton type="button" onClick={() => { handleNewPage(page + 1) }}>Next page</StyledButton>
            </Container>
        )
    }
}

BottomBar.propTypes = {
    page: PropTypes.number.isRequired,
    handleNewPage: PropTypes.func.isRequired
}

export default BottomBar;