const express = require('express'),
      app = express(),
      axios = require('axios'),
      path = require('path');

app.use(express.static('public'));

app.get('/api/gifs', (req, res) => {
    if(req.query.search) {
        const offset = (req.query.page - 1) * 20;
        axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: 'qwhv3ycc9rLMjy5J9rlXkaQEtlaZzRBW',
                q: req.query.search,
                limit: 20,
                offset: offset
            }
        })
        .then((response) => res.json(response.data))
        .catch((error) => res.json(error));
    }
    else {
        const offset = (req.query.page - 1) * 20;
        axios.get('https://api.giphy.com/v1/gifs/trending', {
            params: {
                api_key: 'qwhv3ycc9rLMjy5J9rlXkaQEtlaZzRBW',
                limit: 20,
                offset: offset
            }
        })
        .then((response) => res.json(response.data))
        .catch((error) => res.json(error));
    }
});

app.get('/api/images', (req, res) => {
    if(req.query.search) {
        axios.get(`https://pixabay.com/api/`, {
            params: {
                key: '7715054-438327f2e182ffe2d984b22e4',
                q: req.query.search,
                page: req.query.page
            }
        })
        .then((response) => res.json(response.data))
        .catch((error) => res.json(error));
    }
    else {
        axios.get('https://pixabay.com/api/', {
            params: {
                key: '7715054-438327f2e182ffe2d984b22e4',
                page: req.query.page
            }
        })
        .then((response) => res.json(response.data))
        .catch((error) => res.json(error));
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port,  () => console.log(`App listening on port ${port}`));