import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'olá world' });
})


app.listen(3333);