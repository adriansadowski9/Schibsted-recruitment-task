import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../Image/Image';
import theme from '../../assets/styles/theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    ${theme.mq.desktop} {
        display: block;
        columns: 3;
        justify-items: start;
        align-items: start;
    }
`;

class Images extends React.Component {
    render() {
        const { gifs, images } = this.props;
        const combinedImages = [...gifs, ...images];
        return (
            <Container>
                {combinedImages.map(image => {
                    const element = image.type === 'gif' ?
                    <Image key={image.id} src={image.images.original.url} linkTo={image.url} name={image.title}/>
                    : image.type === 'photo' ? 
                    <Image key={image.id} src={image.webformatURL} linkTo={image.pageURL} name={image.user}/>
                    : '';
                    return element;
                })}
            </Container>
        )
    }
}

Images.propTypes = {
    gifs: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired
}

export default Images;