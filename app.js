const express = require('express');
const turmasRouter = require('./routes/turmas');

const app = express();
const PORT = 3000;

app.use(turmasRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
