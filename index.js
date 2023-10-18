import express from 'express';
import config from './config.js';
const app = express();

const { port, hostname } = config;
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`App is listening on http://${hostname}:${port}`)
})