const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/rotas');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`));
