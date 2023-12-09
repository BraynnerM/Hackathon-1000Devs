import { PrismaClient } from "@prisma/client";
import express from "express";
import swaggerUi from "swagger-ui-express";
import specs from "../../swaggerOptions.js";  
import swaggerDocument from "../../swagger.json";
import router from "../routes/routes.js";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

// Rota do Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/docs', swaggerUi.setup(specs));


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
