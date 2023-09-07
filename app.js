const express = require('express');
const mongoose = require('./dataB/db');
const routes = require('./Routes/routes');

require('dotenv').config();
const app = express();


const port = process.env.PORT || 4000;
app.use(express.json());
app.use(routes);

app.listen(port, async () => {
    await mongoose;
    console.log(`server is listening at port ${port}`);
});
