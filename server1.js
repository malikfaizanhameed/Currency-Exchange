const express = require('express');
const app = express();

const axios = require('axios').default;

app.use(express.static('Front-end'));
app.use(express.json({ limit: '1mb' }));

app.post('/convert', async (req, res) => {
    console.log(req.body);
    const resp = await axios.get(`http://localhost:5000/operate?amount=${req.body.amount}&currency=${req.body.currency}`);
    // axios.get('localhost:5000');
    console.log(resp.data);
    res.send(JSON.stringify(resp.data));
})

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});