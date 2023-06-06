const express = require('express');

const productRouter = require('./app/routes/product');

const app = express();

app.use('/api/products', productRouter );

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

