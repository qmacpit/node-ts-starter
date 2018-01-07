import { Router } from 'express';

const express = require('express');
const bodyParser = require('body-parser');

const { getContent, getAllUsers, getUser } = require('./dataFacade');

const app = express();

app.use(bodyParser.json());

const apiRouter = Router();

app.use('/api', apiRouter);

apiRouter.get('/users', (req, res) => res.send(getAllUsers()));
apiRouter.get('/user/:username', (req, res) => res.send(getUser(req.params.username)));

require('./tsApi')(apiRouter);

app.get('*', require('./render'));

app.listen(3000, () => {
    console.log('server running');
});
