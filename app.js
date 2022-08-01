

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); //Allows the request to continue in the next middleware in line
});

app.use((req, res, next) => {
    console.log('In the other middleware');
    res.send('<h1>Hellofrom Express</h1>'); // This is to send response of any body type
});

app.listen(4000); 