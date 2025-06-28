const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const productRoutes = require('./routes/productRoutes');

app.use('/products', productRoutes);

app.get('/ok', (req, res) => {
    res.send({ message: 'Welcome to API Products Service', timestamp: Date.now() });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Products Service running on port ${PORT}`));
