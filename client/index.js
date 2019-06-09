import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import Images from './components/Images/Images';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            images: [],
            searchQuery: '',
            page: 1
        }
    }

    getGifs = () => {
        axios.get('/api/gifs', {
            params: {
                search: this.state.searchQuery,
                page: this.state.page
            }
        })
        .then((res) => {
            res.data.data ? 
            this.setState({gifs: res.data.data})
            : this.setState({gifs: []});
        })
        .catch((error) => console.log(error));
    }

    getImages = () => {
        axios.get('/api/images', {
            params: {
                search: this.state.searchQuery,
                page: this.state.page
            }
        })
        .then((res) => {
            res.data.hits ? 
            this.setState({images: res.data.hits})
            : this.setState({gifs: []});
        })
        .catch((error) => console.log(error));
    }

    refreshData = () => {
        this.getGifs()
        this.getImages();
    }

    handleInput = (e) => {
        this.setState({searchQuery: e.target.value});
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter')
            this.refreshData();
    }

    componentDidMount() {
        this.refreshData();
    }

    render() {
        return (
            <>
                <SearchBar 
                    handleInput={this.handleInput} 
                    handleKeyPress={this.handleKeyPress}
                    handleSearch={this.refreshData}
                />
                <Images 
                    gifs={this.state.gifs}
                    images={this.state.images}
                />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);