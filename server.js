const express = require("express"),
      app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello');
});

const port = process.env.PORT || 4000;
app.listen(port,  () => console.log(`App listening on port ${port}`));