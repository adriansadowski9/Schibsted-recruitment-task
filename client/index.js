import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: {},
            images: {},
            searchQuery: '',
            page: 1
        }
    }

    getGifs() {
        axios.get('/api/gifs', {
            params: {
                search: this.state.searchQuery,
                page: this.state.page
            }
        })
        .then((res) => this.setState({gifs: res.data.data}))
        .catch((error) => console.log(error));
    }

    getImages() {
        axios.get('/api/images', {
            params: {
                search: this.state.searchQuery,
                page: this.state.page
            }
        })
        .then((res) => this.setState({images: res.data.hits}))
        .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.getGifs();
        this.getImages();
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);