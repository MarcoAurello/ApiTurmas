const express = require('express');
const sql = require('mssql');
const { connectDB, closeDB } = require('../db');

const router = express.Router();

router.get('/turmasUIS', async (req, res) => {
  try {
    await connectDB();

    // Consulta SQL para obter dados
    const result = await sql.query("SELECT A.AlunoId, A.AlunoNome, A.AlunoCPF, A.AlunoEmail, T.TurmaId, T.TurmaNome, T.CodigoDaTurma, T.TurmaSituacao, T.TurmaDataDeInicio, T.TurmaDataDeTermino, M.TurmaCodigoFormatado FROM Analise_Turma T INNER JOIN Analise_Matricula M ON M.TurmaId = T.TurmaId INNER JOIN Analise_Aluno A ON M.AlunoId = A.AlunoId WHERE T.UnidadeOperativaId = 182 AND (T.TurmaSituacao = 'Liberada para Matrícula' OR T.TurmaSituacao = 'Em Processo')");

    // Enviar os resultados como resposta
    res.json(result.recordset);
  } catch (err) {
    console.error('Erro ao consultar o SQL Server:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  } finally {
    closeDB();
  }
});



module.exports = router;
