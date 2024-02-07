const sql = require('mssql');

// Configurações de conexão com o SQL Server
const config = {
  user: 'sa',
  password: 'local',
  server: '10.9.8.74',
  database: 'DATASET_SIG',
  options: {
    encrypt: false,
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
  } catch (err) {
    console.error('Erro ao conectar ao SQL Server:', err);
    throw err;
  }
};

const closeDB = () => {
  sql.close();
};

module.exports = {
  connectDB,
  closeDB,
};
