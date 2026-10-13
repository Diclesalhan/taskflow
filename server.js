const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('TaskFlow API çalışıyor');
});

app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});