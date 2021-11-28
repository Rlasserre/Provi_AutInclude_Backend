require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();
const rotas = require('./routes');
app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(process.env.PORT || 3000);