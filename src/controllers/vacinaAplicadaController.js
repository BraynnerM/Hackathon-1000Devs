// vacinaAplicadaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// API de pesquisa de vacinas aplicadas por pessoa
async function getVacinasAplicadas(req, res) {
  const pessoa_id = parseInt(req.query.pessoa_id);

  try {
    const vacinasAplicadas = await prisma.vacinaAplicada.findMany({
      where: { id_paciente: pessoa_id },
      include: {
        vacina: true,
      },
    });

    res.json(vacinasAplicadas);
  } catch (error) {
    console.error('Erro ao pesquisar vacinas aplicadas:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

// API de pesquisa de vacina aplicada por ID
async function getVacinaAplicadaById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const vacinaAplicada = await prisma.vacinaAplicada.findUnique({
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
  const { pessoa_id, vacina_id, data_aplicacao } = req.body;

  try {
    const vacinaAplicada = await prisma.vacinaAplicada.create({
      data: {
        id_paciente: pessoa_id,
        id_vacina: vacina_id,
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
    const vacinaAplicada = await prisma.vacinaAplicada.update({
      where: { id },
      data: dadosAtualizados,
    });

    res.json(vacinaAplicada);
  } catch (error) {
    console.error('Erro ao atualizar vacina aplicada:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

// API de exclusão de vacina aplicada
async function deleteVacinaAplicada(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.vacinaAplicada.delete({
      where: { id },
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
