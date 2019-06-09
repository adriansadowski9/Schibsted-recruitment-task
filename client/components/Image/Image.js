import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
    render() {
        const { src, linkTo, name } = this.props;
        return (
            <div>
                <a href={linkTo}>
                    <img src={src} alt={name}/>
                </a>
            </div>
        )
    }
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export default Image;