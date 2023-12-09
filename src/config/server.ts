// server.js
import { PrismaClient } from "@prisma/client";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
const router = require("./routes/routes");
const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use("/api", router);

app.listen(port, async () => {
  console.log(`Servidor em execução em http://localhost:${port}`);

  // Sincronize o modelo do Prisma com o banco de dados
  await prisma.$connect();
  console.log("Conexão com o banco de dados estabelecida");
});

// Lida com desconexão do Prisma ao encerrar o aplicativo
process.on("beforeExit", async () => {
  await prisma.$disconnect();
  console.log("Conexão com o banco de dados encerrada");
});
