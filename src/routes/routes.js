const routes = require('./src/routes/routes');
app.use("/api/users", routes);

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("*** Erro ao conectar ao banco de dados ***", err);
  } else {
    console.log("Conexão realizada com sucesso ao banco de dados");
  }
});
