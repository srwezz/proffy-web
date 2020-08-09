import express from 'express';
const app = express();

app.use(express.json);

app.post('/', (request, response) => {
    response.json({message: 'Hello Word'})
});

app.listen(3333);
