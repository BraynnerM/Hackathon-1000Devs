const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./config/database');

// Configuração do corpo da solicitação para trabalhar com JSON
app.use(express.json());

// Verificar conexão com o banco de dados
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão bem-sucedida com o banco de dados.');
    }
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Configuração das rotas
const express = require('express');
const database = require('./config/database');
const routes = require('./src/routes/routes'); 

app.use(express.json());

app.use('/api/users', routes); 

app.listen(PORT, async () => {
  console.log(`O Servidor foi iniciado na porta ${PORT}`);

   try {
    const result = await database.query('SELECT NOW()');
    console.log('O Banco de dados estar conectado:', result.rows[0].now);
  } catch (error) {
    console.error('*** Erro ao conectar ao banco de dados: ***', error);
  }
});
