import mapRoutes from './routes/index';

const express = require('express');

const PORT = 1245;
const HOST = '127.0.0.1';

const app = express();

mapRoutes(app);

app.listen(PORT, HOST);

module.exports = app;
