const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 4005;
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    console.log("🚀 ~ file: index.js ~ line 10 ~ app.post ~ req", req.body)
    const event = req.body;
    
    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);
    axios.post('http://localhost:4003/events', event);

    res.send({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Event bus up and running at http://localhost:${port}`);
});
