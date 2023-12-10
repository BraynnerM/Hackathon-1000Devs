// vacinaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getVacinas(req, res) {
  try {
    const vacinas = await prisma.vacina.findMany();
    res.json(vacinas);
  } catch (error) {
    console.error('Erro ao obter vacinas:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinaById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const vacina = await prisma.vacina.findUnique({
      where: { id_vacina: id },
    });

    if (!vacina) {
      res.status(404).send('Vacina não encontrada');
    } else {
      res.json(vacina);
    }
  } catch (error) {
    console.error('Erro ao obter vacina por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function createVacina(req, res) {
  const novaVacina = req.body;

  try {
    const vacina = await prisma.vacina.create({
      data: novaVacina,
    });

    res.status(201).json(vacina);
  } catch (error) {
    console.error('Erro ao criar vacina:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function updateVacina(req, res) {
  const id = parseInt(req.params.id);
  const dadosAtualizados = req.body;

  try {
    const vacina = await prisma.vacina.update({
      where: { id_vacina: id },
      data: dadosAtualizados,
    });

    res.json(vacina);
  } catch (error) {
    console.error('Erro ao atualizar vacina:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function deleteVacina(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.vacina.delete({
      where: { id_vacina: id },
    });

    res.send('Vacina deletada com sucesso');
  } catch (error) {
    console.error('Erro ao deletar vacina:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getVacinas,
  getVacinaById,
  createVacina,
  updateVacina,
  deleteVacina,
};
