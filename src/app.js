const express = require('express');
const bodyParser = require('body-parser');

const { getContent, getAllUsers, getUser } = require('./dataFacade');

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => res.send(getContent()));
app.get('/users', (req, res) => res.send(getAllUsers()));
app.get('/user/:username', (req, res) => res.send(getUser(req.params.username)));

require('./tsApi')(app);

app.listen(3000, () => {
    console.log('server running');
});
