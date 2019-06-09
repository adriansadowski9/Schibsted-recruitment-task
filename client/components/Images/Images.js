import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';

class Images extends React.Component {
    render() {
        const { gifs, images } = this.props;
        const combinedImages = [...gifs, ...images];
        return (
            <div>
                {combinedImages.map(image => {
                    const element = image.type === 'gif' ?
                    <Image key={image.id} src={image.images['480w_still'].url} linkTo={image.url} name={image.title}/>
                    : image.type === 'photo' ? 
                    <Image key={image.id} src={image.webformatURL} linkTo={image.pageURL} name={image.user}/>
                    : '';
                    return element;
                })}
            </div>
        )
    }
}

Images.propTypes = {
    gifs: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired
}

export default Images;