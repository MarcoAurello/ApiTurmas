const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig.json'); 

const sql = require('mssql');
const config = {
  user: 'sa',
  password: 'local',
  server: 'SQLSERVER',
  database: 'API_SIG',
  options: {
    encrypt: false,
  },
};

app.use(express.json());

const sqlRoutes = require('./src/routes/sqlRouter'); 
app.use('/api', sqlRoutes);

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sql.connect(config)
  .then(() => {
    console.log('Conectado ao SQL Server');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao SQL Server:', err);
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
