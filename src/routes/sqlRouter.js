const express = require('express');
const router = express.Router();
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'local',
  server: '10.9.8.74',
  database: 'API_SIG',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

router.get('/turmas', async (req, res) => {
  try {
    // Conecta ao banco de dados SQL Server
    await sql.connect(config);

    // Consulta SQL para obter todos os dados da tabela dbo.Turma
    const sqlQuery = `SELECT * FROM dbo.ListaTurmas`;

    // Executa a consulta SQL
    const result = await sql.query(sqlQuery);

    // Retorna os resultados como JSON
    res.json({
      data: result.recordset
    });

  } catch (err) {
    console.error('Erro ao buscar dados do SQL Server:', err);
    res.status(500).send('Erro interno do servidor');
  } finally {
    // Fecha a conexão com o banco de dados
    sql.close();
  }
});

module.exports = router;
