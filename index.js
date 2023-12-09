const express = require('express');
const app = express();
const PORT = 



// Configuração das rotas
const express = require('express');
const database = require('./config/database');
const routes = require('./src/routes/routes'); 

const app = express();
const PORT = process.env.PORT || 3000;

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
