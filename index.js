const express = require('express');
const app = express();
const add = require('./routes/add');
const getart = require('./routes/getart');



app.use('/add',add);
app.use('/getart',getart);


app.listen(6060);