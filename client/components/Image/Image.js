import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';

const Container = styled.div`
    margin-bottom: 15px;
    transition: opacity .2s;
    :hover {
        opacity: 0.85;
    }
`;

const StyledImg = styled.img`
    width: 100%;
    max-width: 480px;
    border-radius: 2px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
    ${theme.mq.desktop} {
        width: 300px;
    }
`;

class Image extends React.Component {
    render() {
        const { src, linkTo, name } = this.props;
        return (
            <Container>
                <a href={linkTo} target="_blank" rel="noopener noreferrer">
                    <StyledImg src={src} alt={name}/>
                </a>
            </Container>
        )
    }
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export default Image;