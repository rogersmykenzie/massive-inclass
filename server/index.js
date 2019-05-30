const express = require('express');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING)

app.listen(process.env.SERVER_PORT, () => console.log(`Listening on Port ${process.env.SERVER_PORT}`));