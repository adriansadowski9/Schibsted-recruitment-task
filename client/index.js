import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';

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
        .then((res) => this.setState({gifs: res.data}))
        .catch((error) => console.log(error));
    }

    getImages() {
        axios.get('/api/images', {
            params: {
                search: this.state.searchQuery,
                page: this.state.page
            }
        })
        .then((res) => this.setState({images: res.data}))
        .catch((error) => console.log(error));
    }

    refreshData = () => {
        this.getGifs();
        this.getImages();
    }

    handleInput = (e) => {
        this.setState({searchQuery: e.target.value});
    }

    componentDidMount() {
        this.refreshData();
    }

    render() {
        return (
            <>
                <SearchBar 
                    handleInput={this.handleInput} 
                    handleSearch={this.refreshData}
                />
                <h1>Hello World!</h1>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);