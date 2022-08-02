const express = require('express');
const server = express();

const routers = require('./routes/index');

server.use('/',routers);
server.use('/produtos',routers);





server.listen(3000);