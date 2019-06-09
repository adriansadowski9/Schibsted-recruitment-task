import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GlobalStyle from './assets/styles/GlobalStyle';
import styled from 'styled-components';
import theme from './assets/styles/theme';
import SearchBar from './components/SearchBar/SearchBar';
import Images from './components/Images/Images';
import BottomBar from './components/BottomBar/BottomBar';

const Container = styled.div`
    padding: 0 15px;
    ${theme.mq.desktop} {
        max-width: 992px;
        margin: 0 auto;
    }
`;

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

    handleReset = () => {
        const promise = new Promise((resolve, reject) => {
            this.setState({searchQuery: ''});
            resolve();
        });
        promise.then(() => {
            this.handleNewPage();
        });
    }

    handleInput = (e) => {
        this.setState({searchQuery: e.target.value});
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter')
            this.handleNewPage();
    }

    handleNewPage = (page = 1) => {
        const promise = new Promise((resolve, reject) => {
            this.setState({page: page});
            resolve();
        })
        promise.then(() => {
            this.refreshData();
        });
    }

    componentDidMount() {
        this.refreshData();
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container>
                <GlobalStyle/>
                <SearchBar 
                    handleReset={this.handleReset}
                    inputValue={this.state.searchQuery}
                    handleInput={this.handleInput} 
                    handleKeyPress={this.handleKeyPress}
                    handleSearch={() => {this.handleNewPage()}}
                />
                <Images 
                    gifs={this.state.gifs}
                    images={this.state.images}
                />
                <BottomBar
                    page={this.state.page}
                    handleNewPage={this.handleNewPage}
                />
            </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);