import express from 'express';
import { UsersController } from '@controllers/UsersController';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'olá world' });
})


app.listen(3333);