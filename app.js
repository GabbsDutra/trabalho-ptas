const express = require('express');
const logger = require('./middlewares/logger');
const itemsRoutes = require('./routes/itemsRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(logger);

// Rotas
app.get('/', (req, res) => res.send('Bem-vindo ao sistema!'));
app.use('/items', itemsRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
