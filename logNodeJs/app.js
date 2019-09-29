const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./logger');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    logger.info("Logger works");
    res.send('Hello From Cloudnweb')
});

app.listen(3000, () => {
    console.log(`app is listening to port 3000`)
});