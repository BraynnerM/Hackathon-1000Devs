// vacinaAplicadaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// API de pesquisa de vacinas aplicadas por pessoa
async function getVacinasAplicadas(req, res) {
  try {
    const vacinasAplicadas = await prisma.vacinaaplicada.findMany({
      include: {
        paciente: true, // Inclui dados relacionados ao paciente
        vacina: true, // Inclui dados relacionados à vacina
      },
    });

    // Mapeia os resultados para incluir apenas as informações desejadas
    const resultadoFormatado = vacinasAplicadas.map((aplicacao) => ({
      id_paciente: aplicacao.id_paciente,
      id_vacina: aplicacao.id_vacina,
      data_aplicacao: aplicacao.data_aplicacao,
      nome_paciente: aplicacao.paciente.nome, // Obtém o nome do paciente
      nome_vacina: aplicacao.vacina.vacina, // Obtém o nome da vacina
    }));

    res.status(200).json(resultadoFormatado);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao executar a consulta.' });
  }
};

// API de pesquisa de vacina aplicada por ID
async function getVacinaAplicadaById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const vacinaAplicada = await prisma.vacinaaplicada.findUnique({
      where: { id },
    });

    if (!vacinaAplicada) {
      res.status(404).send('Vacina aplicada não encontrada');
    } else {
      res.json(vacinaAplicada);
    }
  } catch (error) {
    console.error('Erro ao obter vacina aplicada por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

// API de cadastro de vacina aplicada
async function createVacinaAplicada(req, res) {
  const { id_paciente, id_vacina, data_aplicacao } = req.body;

  try {
    // Verificar se o paciente existe antes de criar a vacina aplicada
    const paciente = await prisma.paciente.findUnique({
      where: { id_paciente: id_paciente },
    });

    if (!paciente) {
      return res.status(404).json({ mensagem: 'Paciente não encontrado.' });
    }

    const vacinaAplicada = await prisma.vacinaaplicada.create({
      data: {
        id_paciente,
        id_vacina,
        data_aplicacao: new Date(data_aplicacao),
      },
    });

    res.status(201).json(vacinaAplicada);
  } catch (error) {
    console.error('Erro ao cadastrar vacina aplicada:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

// API de atualização de vacina aplicada
async function updateVacinaAplicada(req, res) {
  const id = parseInt(req.params.id);
  const dadosAtualizados = req.body;

  try {
    const vacinaAplicada = await prisma.vacinaaplicada.update({
      where: { id },
      data: dadosAtualizados,
    });

    res.json(vacinaAplicada);
  } catch (error) {
    console.error('Erro ao atualizar vacina aplicada:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function deleteVacinaAplicada(req, res) {
  const id_paciente = parseInt(req.params.id);
  const id_vacina = parseInt(req.params.idVacina);

  try {
    await prisma.vacinaaplicada.delete({
      where: { id_paciente_id_vacina: { id_paciente, id_vacina } },
    });

    res.send('Vacina aplicada excluída com sucesso');
  } catch (error) {
    console.error('Erro ao excluir vacina aplicada:', error);
    res.status(500).send('Erro interno do servidor');
  }
}



module.exports = {
  getVacinasAplicadas,
  getVacinaAplicadaById,
  createVacinaAplicada,
  updateVacinaAplicada,
  deleteVacinaAplicada,
};