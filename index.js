import express from 'express';
const app = express();

const hostname = process.env.hostname || 'localhost';
const port = process.env.port || 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`App is listening on http://${hostname}:${port}`)
})