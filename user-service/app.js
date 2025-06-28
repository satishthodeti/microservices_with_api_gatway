const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.get('/ok', (req, res) => {
    res.send({ message: 'Welcome to API User Service', timestamp: Date.now() });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));

