const express = require('express');
const connectDb = require('./db');
const router = require('./router');
const app = express();
app.use(express.json());
app.use('/', router);
connectDb(); //database connection
app.listen(4000, () => {
    console.log('server working');
})
