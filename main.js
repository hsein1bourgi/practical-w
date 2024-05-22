const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Connect");
});

app.get('/hello', (req, res) => {
    res.send("Hello World");
});

app.get('/health-check', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});

console.log("Hello my first CI v22 5t");

